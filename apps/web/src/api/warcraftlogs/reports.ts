export const warcraftLogsReportsQuery = `
query ReportData($guildName: String!, $guildServerSlug: String!, $guildServerRegion: String!){
    reportData {
        reports(guildName: $guildName, guildServerSlug: $guildServerSlug, guildServerRegion: $guildServerRegion, limit: 5) {
            data {
                title,
                code,
                endTime,
                startTime,
                owner {
                    id,
                    name
                },
                guild {
                    name
                }
            }
        }
    }
}`;
