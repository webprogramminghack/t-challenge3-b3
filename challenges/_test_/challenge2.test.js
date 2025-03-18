const {
  getUserById,
  fetchMultipleUsers,
  displayUserData,
} = require('../challenge2.js');

global.fetch = jest.fn();

describe('User Service Tests', () => {
  let consoleErrorSpy;

  beforeAll(() => {
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterAll(() => {
    consoleErrorSpy.mockRestore();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getUserById', () => {
    it('should return user data if fetch is successful', async () => {
      const mockUser = {
        id: 1,
        name: 'Leanne Graham',
        email: 'Sincere@april.biz',
        phone: '1-770-736-8031 x56442',
      };
      fetch.mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => mockUser,
      });
      const result = await getUserById(1);
      expect(fetch).toHaveBeenCalledWith(
        'https://jsonplaceholder.typicode.com/users/1'
      );
      expect(result).toEqual(mockUser);
    });

    it('should throw an error if response is not ok', async () => {
      fetch.mockResolvedValueOnce({
        ok: false,
        status: 404,
      });
      await expect(getUserById(9999)).rejects.toThrow(
        'HTTP error! status: 404'
      );
      expect(fetch).toHaveBeenCalledWith(
        'https://jsonplaceholder.typicode.com/users/9999'
      );
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        'Error fetching user data:',
        expect.any(Error)
      );
    });

    it('should throw and log error if fetch throws', async () => {
      const mockError = new Error('Network error');
      fetch.mockRejectedValueOnce(mockError);
      await expect(getUserById(2)).rejects.toThrow('Network error');
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        'Error fetching user data:',
        mockError
      );
    });
  });

  describe('fetchMultipleUsers', () => {
    it('should return an array of users if all fetch calls succeed', async () => {
      const mockUsers = [
        { id: 1, name: 'User1', email: 'user1@test.com', phone: '123456' },
        { id: 2, name: 'User2', email: 'user2@test.com', phone: '789012' },
      ];
      fetch.mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => mockUsers[0],
      });
      fetch.mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => mockUsers[1],
      });
      const result = await fetchMultipleUsers([1, 2]);
      expect(result).toEqual(mockUsers);
      expect(fetch).toHaveBeenCalledTimes(2);
      expect(fetch).toHaveBeenCalledWith(
        'https://jsonplaceholder.typicode.com/users/1'
      );
      expect(fetch).toHaveBeenCalledWith(
        'https://jsonplaceholder.typicode.com/users/2'
      );
    });

    it('should throw error if any fetch call fails', async () => {
      fetch.mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => ({ id: 1, name: 'User1' }),
      });
      fetch.mockResolvedValueOnce({
        ok: false,
        status: 500,
      });
      await expect(fetchMultipleUsers([1, 2])).rejects.toThrow(
        'HTTP error! status: 500'
      );
      expect(fetch).toHaveBeenCalledTimes(2);
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        'Error fetching user data:',
        expect.any(Error)
      );
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        'Error fetching multiple users:',
        expect.any(Error)
      );
    });
  });

  describe('displayUserData', () => {
    it('should log user info to console for each user', async () => {
      const mockUsers = [
        { id: 1, name: 'User1', email: 'user1@test.com', phone: '123456' },
        { id: 2, name: 'User2', email: 'user2@test.com', phone: '789012' },
      ];
      fetch.mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => mockUsers[0],
      });
      fetch.mockResolvedValueOnce({
        ok: true,
        status: 200,
        json: async () => mockUsers[1],
      });
      const consoleLogSpy = jest
        .spyOn(console, 'log')
        .mockImplementation(() => {});
      await displayUserData([1, 2]);
      expect(consoleLogSpy).toHaveBeenCalledTimes(2);
      expect(consoleLogSpy).toHaveBeenCalledWith(
        `Name: ${mockUsers[0].name}, Email: ${mockUsers[0].email}, Phone: ${mockUsers[0].phone}`
      );
      expect(consoleLogSpy).toHaveBeenCalledWith(
        `Name: ${mockUsers[1].name}, Email: ${mockUsers[1].email}, Phone: ${mockUsers[1].phone}`
      );
      consoleLogSpy.mockRestore();
    });
  });
});
