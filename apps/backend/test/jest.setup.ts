//Tests can mock Clerk for mock credentials, db mock returns mock rows.
jest.mock("@clerk/nextjs/server", () => ({
    getAuth: jest.fn(),
    clerkClient: {
        users: {
            getUser: jest.fn(),
            updateUser: jest.fn(),
        },
    },
}));

//Always mock the db pool in every test
jest.mock("../config/dbConfig.ts", () => ({
    db: {
        query: jest.fn(),
        connect: jest.fn(),
        end: jest.fn(),
    },
}));

afterEach(() => {
    jest.clearAllMocks();
});

afterAll(() => {
    jest.resetModules();
});


