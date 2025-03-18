const { Task, PriorityTask, isTask } = require('../challenge1.js');

describe('Task Management System', () => {
  beforeEach(() => {
    Task.lastId = 0;
  });

  test('Task should be created with correct properties', () => {
    const task = new Task('Write report', 'Finish the quarterly report');

    expect(task.title).toBe('Write report');
    expect(task.description).toBe('Finish the quarterly report');
    expect(task.completed).toBe(false);
    expect(typeof task.getId()).toBe('number');
    expect(task.getId()).toBe(1);
  });

  test('PriorityTask should be created with correct properties', () => {
    const priorityTask = new PriorityTask(
      'Fix bug',
      'Resolve issue #123',
      'high'
    );

    expect(priorityTask.title).toBe('Fix bug');
    expect(priorityTask.description).toBe('Resolve issue #123');
    expect(priorityTask.priorityLevel).toBe('high');
    expect(priorityTask.completed).toBe(false);
    expect(typeof priorityTask.getId()).toBe('number');
    expect(priorityTask.getId()).toBe(1);
  });

  test('Tasks should generate unique IDs', () => {
    const task1 = new Task('Task 1', 'Description 1');
    const task2 = new Task('Task 2', 'Description 2');

    expect(task1.getId()).toBe(1);
    expect(task2.getId()).toBe(2);
  });

  test('markAsComplete should mark task as completed', () => {
    const task = new Task('Write report', 'Finish the quarterly report');

    expect(task.completed).toBe(false);
    task.markAsComplete();
    expect(task.completed).toBe(true);
  });

  test('markAsComplete in PriorityTask should log message', () => {
    console.log = jest.fn();

    const priorityTask = new PriorityTask(
      'Fix bug',
      'Resolve issue #123',
      'high'
    );

    priorityTask.markAsComplete();
    expect(priorityTask.completed).toBe(true);
    expect(console.log).toHaveBeenCalledWith('Priority task completed!');
  });

  test('isTask should return true for Task and PriorityTask instances', () => {
    const task = new Task('Write report', 'Finish the quarterly report');
    const priorityTask = new PriorityTask(
      'Fix bug',
      'Resolve issue #123',
      'high'
    );

    expect(isTask(task)).toBe(true);
    expect(isTask(priorityTask)).toBe(true);
    expect(isTask({})).toBe(false);
  });

  test('PriorityTask should be an instance of Task', () => {
    const priorityTask = new PriorityTask(
      'Fix bug',
      'Resolve issue #123',
      'high'
    );

    expect(priorityTask instanceof Task).toBe(true);
    expect(priorityTask instanceof PriorityTask).toBe(true);
  });
});
