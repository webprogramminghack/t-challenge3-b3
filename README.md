# Challenge 3 (Phase 1) - Batch 3

---

# Challenge 1

## Task Management System

### **Problem Statement**

Create a **Task Management System** with the following features:

1. Implement a `Task` class with:

   - A **private property** `#id` that is automatically generated.
   - Public properties `title`, `description`, and `completed`.
   - A **static method** `generateId()` to generate unique IDs.
   - A method `markAsComplete()` to mark the task as completed.
   - A method `getId()` to safely access the private `#id`.

2. Implement a `PriorityTask` class that **inherits** from `Task` and has:
   - A new property `priorityLevel` (values: `"low"`, `"medium"`, `"high"`).
   - An overridden `markAsComplete()` method that logs `"Priority task completed!"` when completed.
3. Implement a function `isTask(object)` that returns `true` if the object is an instance of `Task`.

### Example 1: Creating and Completing a Priority Task

```javascript
const task2 = new PriorityTask('Fix bug', 'Resolve issue #123', 'high');

console.log(task2.title); // "Fix bug"
console.log(task2.description); // "Resolve issue #123"
console.log(task2.priorityLevel); // "high"
console.log(task2.completed); // false
console.log(task2.getId()); // 2 (auto-generated ID)

task2.markAsComplete();
console.log(task2.completed); // true
```

### Expected Output

```
Fix bug
Resolve issue #123
high
false
2
Priority task completed!
true
```

### Example 2: Checking Instance Type

```javascript
console.log(isTask(task1)); // true
console.log(isTask(task2)); // true
console.log(isTask({})); // false
```

### Expected Output

```
true
true
false
```

---

# Challenge 2

## Fetching and Displaying User Data from JSONPlaceholder API

### **Description:**

You are tasked with building a simple application that fetches user data from the JSONPlaceholder API and displays it in the console. The application should handle errors gracefully and use modern JavaScript features like `async/await` and `Promises`.

### **Requirements:**

1. Use the `fetch` API to get user data from the JSONPlaceholder API (https://jsonplaceholder.typicode.com/users).
2. Implement error handling using `try/catch` to handle any potential errors during the API request.
3. Use `Promise.all` to fetch data for multiple users concurrently.
4. Display the fetched user data in the console, showing only the user's name, email, and phone number.
5. Implement a function `getUserById` that takes a user ID and returns a promise that resolves with the user's data.
6. Use `async/await` to handle asynchronous operations.

### **Example Input:**

```javascript
const userIds = [1, 2, 3];
displayUserData(userIds);
```

### **Expected Output:**

```
Name: Leanne Graham, Email: Sincere@april.biz, Phone: 1-770-736-8031 x56442
Name: Ervin Howell, Email: Shanna@melissa.tv, Phone: 010-692-6593 x09125
Name: Clementine Bauch, Email: Nathan@yesenia.net, Phone: 1-463-123-4447
```

---

# How to Run the Test

### 1. Install Dependencies

Run the following command to install dependencies:

```
npm install
```

### 2. Run Tests

Run the tests using the following command:

```
npm run test
```

---

# Evaluation System

The evaluation for this challenge is based on the following four criteria:

### 1. Requirement Fulfillment & Correctness

### 2. Javascript Usage

### 3. Problem Solving Approach

### 4. Code Clarity

---

# How to Upload your Challange

Check this module: [click this](https://orchid-clematis-3e4.notion.site/Panduan-Penggunaan-Git-Untuk-Upload-Assignment-e2d80a19b3684f5d8f1a4209dcf85445?pvs=73)

---

## 🎉 Embrace the challenge and turn your tasks into a fun adventure—each step brings you closer to your goals! You've got this! 🚀 Remember, every small victory is a reason to celebrate! 🎈
