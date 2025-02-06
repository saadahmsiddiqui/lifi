import { setupClient } from "../redis"
import { getLeaderboard, updateScore } from "./leaderboard"

const addresses = [
    "0x0288e0ead5016b3044f5384642bf9e6ff27c6975",
    "0x00B655CC4693F79225fFd8d2eC80f9a55f6Ff8B0",
];

describe("leaderboard tests", () => {
    beforeAll(async () => {
        await setupClient()
    })

    it("should add an address to empty leaderboard", async () => {
        const leaderboard = await getLeaderboard();
        expect(leaderboard).toHaveLength(0)
        const newAddr = addresses[0];
        const update = await updateScore(newAddr);
        const newleaderboard = await getLeaderboard();
        expect(newleaderboard).toBeTruthy();
        expect(newleaderboard).toHaveLength(1);
    })

    it("new leader should be at the top", async () => {
        const newLeader = addresses[1];
        for (const num of new Array(5).fill(3)) {
            await updateScore(newLeader);
        }

        const leaderBoard = await getLeaderboard();
        expect(leaderBoard).toHaveLength(2);
        expect(leaderBoard?.[0]).toEqual(newLeader)
    })

    it("old leader should be at the top", async () => {
        const newLeader = addresses[0];
        for (const num of new Array(5).fill(0)) {
            await updateScore(newLeader);
        }

        const leaderBoard = await getLeaderboard();
        expect(leaderBoard).toHaveLength(2);
        expect(leaderBoard?.[0]).toEqual(newLeader)
    })
})