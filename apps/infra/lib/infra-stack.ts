import * as cdk from "@aws-cdk/core";
import * as s3 from "@aws-cdk/aws-s3";
import * as origins from "@aws-cdk/aws-cloudfront-origins";
import * as cloudfront from "@aws-cdk/aws-cloudfront";
import * as dns from "@aws-cdk/aws-route53";
import * as dnsTargets from "@aws-cdk/aws-route53-targets";
import * as cm from "@aws-cdk/aws-certificatemanager";
import { join } from "path";
import * as S3Deployment from "@aws-cdk/aws-s3-deployment";

export class DwarfInvasionStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const PREFIX = "dwarfinvasion";
        const DOMAIN_NAME = `${PREFIX}.com`;
        const bucketName = `${DOMAIN_NAME}-web`;
        const distName = `${DOMAIN_NAME}-cdn`;
        const certificateName = `*.${DOMAIN_NAME}`;

        const hostedZone = dns.HostedZone.fromLookup(this, PREFIX, {
            domainName: DOMAIN_NAME,
        });

        const certificate = new cm.DnsValidatedCertificate(
            this,
            `${PREFIX}-web-certificate`,
            {
                domainName: certificateName,
                hostedZone,
                region: "us-east-1",
                subjectAlternativeNames: [DOMAIN_NAME],
            }
        );
        const bucket = new s3.Bucket(this, bucketName, {
            bucketName,
            publicReadAccess: true,
            removalPolicy: cdk.RemovalPolicy.DESTROY,
        });

        const domainNames = [DOMAIN_NAME, `www.${DOMAIN_NAME}`];
        const distribution = new cloudfront.Distribution(this, distName, {
            domainNames,
            defaultRootObject: "index.html",
            defaultBehavior: {
                viewerProtocolPolicy:
                    cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
                compress: true,
                allowedMethods:
                    cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
                origin: new origins.S3Origin(bucket),
            },
            certificate,
            priceClass: cloudfront.PriceClass.PRICE_CLASS_ALL,
        });

        new dns.CnameRecord(this, `${PREFIX}-cname`, {
            zone: hostedZone,
            recordName: "www",
            domainName: DOMAIN_NAME,
        });
        new dns.ARecord(this, `${PREFIX}-arecord`, {
            zone: hostedZone,
            target: dns.RecordTarget.fromAlias(
                new dnsTargets.CloudFrontTarget(distribution)
            ),
        });

        new S3Deployment.BucketDeployment(this, "web-deployment", {
            sources: [
                S3Deployment.Source.asset(
                    join(__dirname, "..", "..", "web", "dist")
                ),
            ],
            distribution,
            distributionPaths: ["/*"],
            destinationBucket: bucket,
        });
    }
}
