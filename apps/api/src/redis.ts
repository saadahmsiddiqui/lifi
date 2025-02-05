import { createClient } from 'redis';

async function setupLeaderBoardClient() {
    const leaderBoardClient = createClient()

    leaderBoardClient.on('error', err => {
        console.error('RedisConnectionError', err);
        // failure plan
    });

    await leaderBoardClient.connect();
    return leaderBoardClient;
}

export { setupLeaderBoardClient }