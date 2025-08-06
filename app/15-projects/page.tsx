import { ChapterLayout } from '@/components/chapter-layout'
import { CodeBlock } from '@/components/code-block'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Database, Users, FileText, ShoppingCart } from 'lucide-react'

export default function ProjectsPage() {
  return (
    <ChapterLayout
      title="Chapter 15: Projects"
      description="Put your PHP skills to practice with real-world projects including a complete CRUD application."
      prevChapter={{ title: "Object-Oriented Programming", path: "/14-oop" }}
    >
      <div className="space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <Database className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-2" />
              <CardTitle>Mini CRUD Application</CardTitle>
              <CardDescription>
                A complete Create, Read, Update, Delete application with MySQL database
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-green-600 dark:text-green-400 mb-2" />
              <CardTitle>User Management System</CardTitle>
              <CardDescription>
                Manage users with registration, login, and profile management
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Project 1: Mini CRUD Application</h2>
          <p className="mb-4">
            Let's build a complete CRUD (Create, Read, Update, Delete) application to manage a simple task list.
            This project will demonstrate database connectivity, form handling, and basic security practices.
          </p>

          <h3 className="text-xl font-semibold mb-3">Database Setup</h3>
          <CodeBlock
            title="database.sql"
            language="sql"
            code={`-- Create database
CREATE DATABASE task_manager;
USE task_manager;

-- Create tasks table
CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status ENUM('pending', 'in_progress', 'completed') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO tasks (title, description, status) VALUES
('Learn PHP Basics', 'Complete the PHP A to Z course', 'in_progress'),
('Build CRUD App', 'Create a task management application', 'pending'),
('Deploy Project', 'Deploy the application to a web server', 'pending');`}
          />

          <h3 className="text-xl font-semibold mb-3 mt-6">Database Connection</h3>
          <CodeBlock
            title="config/database.php"
            code={`<?php
class Database {
    private $host = 'localhost';
    private $db_name = 'task_manager';
    private $username = 'root';
    private $password = '';
    private $conn;

    public function getConnection() {
        $this->conn = null;
        
        try {
            $this->conn = new PDO(
                "mysql:host=" . $this->host . ";dbname=" . $this->db_name,
                $this->username,
                $this->password
            );
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch(PDOException $e) {
            echo "Connection error: " . $e->getMessage();
        }
        
        return $this->conn;
    }
}
?>`}
          />

          <h3 className="text-xl font-semibold mb-3 mt-6">Task Model</h3>
          <CodeBlock
            title="models/Task.php"
            code={`<?php
class Task {
    private $conn;
    private $table = 'tasks';

    public $id;
    public $title;
    public $description;
    public $status;
    public $created_at;
    public $updated_at;

    public function __construct($db) {
        $this->conn = $db;
    }

    // Create task
    public function create() {
        $query = "INSERT INTO " . $this->table . " 
                  SET title=:title, description=:description, status=:status";
        
        $stmt = $this->conn->prepare($query);
        
        // Sanitize input
        $this->title = htmlspecialchars(strip_tags($this->title));
        $this->description = htmlspecialchars(strip_tags($this->description));
        $this->status = htmlspecialchars(strip_tags($this->status));
        
        // Bind parameters
        $stmt->bindParam(':title', $this->title);
        $stmt->bindParam(':description', $this->description);
        $stmt->bindParam(':status', $this->status);
        
        return $stmt->execute();
    }

    // Read all tasks
    public function readAll() {
        $query = "SELECT * FROM " . $this->table . " ORDER BY created_at DESC";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }

    // Read single task
    public function readOne() {
        $query = "SELECT * FROM " . $this->table . " WHERE id = :id LIMIT 0,1";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':id', $this->id);
        $stmt->execute();
        
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if($row) {
            $this->title = $row['title'];
            $this->description = $row['description'];
            $this->status = $row['status'];
            $this->created_at = $row['created_at'];
            $this->updated_at = $row['updated_at'];
            return true;
        }
        return false;
    }

    // Update task
    public function update() {
        $query = "UPDATE " . $this->table . " 
                  SET title=:title, description=:description, status=:status 
                  WHERE id=:id";
        
        $stmt = $this->conn->prepare($query);
        
        // Sanitize input
        $this->title = htmlspecialchars(strip_tags($this->title));
        $this->description = htmlspecialchars(strip_tags($this->description));
        $this->status = htmlspecialchars(strip_tags($this->status));
        $this->id = htmlspecialchars(strip_tags($this->id));
        
        // Bind parameters
        $stmt->bindParam(':title', $this->title);
        $stmt->bindParam(':description', $this->description);
        $stmt->bindParam(':status', $this->status);
        $stmt->bindParam(':id', $this->id);
        
        return $stmt->execute();
    }

    // Delete task
    public function delete() {
        $query = "DELETE FROM " . $this->table . " WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        
        $this->id = htmlspecialchars(strip_tags($this->id));
        $stmt->bindParam(':id', $this->id);
        
        return $stmt->execute();
    }
}
?>`}
          />

          <h3 className="text-xl font-semibold mb-3 mt-6">Main Application</h3>
          <CodeBlock
            title="index.php"
            code={`<?php
require_once 'config/database.php';
require_once 'models/Task.php';

$database = new Database();
$db = $database->getConnection();
$task = new Task($db);

// Handle form submissions
if ($_POST) {
    if (isset($_POST['action'])) {
        switch ($_POST['action']) {
            case 'create':
                $task->title = $_POST['title'];
                $task->description = $_POST['description'];
                $task->status = $_POST['status'];
                
                if ($task->create()) {
                    $message = "Task created successfully!";
                } else {
                    $error = "Unable to create task.";
                }
                break;
                
            case 'update':
                $task->id = $_POST['id'];
                $task->title = $_POST['title'];
                $task->description = $_POST['description'];
                $task->status = $_POST['status'];
                
                if ($task->update()) {
                    $message = "Task updated successfully!";
                } else {
                    $error = "Unable to update task.";
                }
                break;
                
            case 'delete':
                $task->id = $_POST['id'];
                if ($task->delete()) {
                    $message = "Task deleted successfully!";
                } else {
                    $error = "Unable to delete task.";
                }
                break;
        }
    }
}

// Get all tasks
$stmt = $task->readAll();
$tasks = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task Manager - CRUD Application</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h1 class="mb-4">Task Manager</h1>
        
        <?php if (isset($message)): ?>
            <div class="alert alert-success"><?php echo $message; ?></div>
        <?php endif; ?>
        
        <?php if (isset($error)): ?>
            <div class="alert alert-danger"><?php echo $error; ?></div>
        <?php endif; ?>
        
        <!-- Create Task Form -->
        <div class="card mb-4">
            <div class="card-header">
                <h3>Add New Task</h3>
            </div>
            <div class="card-body">
                <form method="POST">
                    <input type="hidden" name="action" value="create">
                    <div class="mb-3">
                        <label for="title" class="form-label">Title</label>
                        <input type="text" class="form-control" name="title" required>
                    </div>
                    <div class="mb-3">
                        <label for="description" class="form-label">Description</label>
                        <textarea class="form-control" name="description" rows="3"></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="status" class="form-label">Status</label>
                        <select class="form-control" name="status">
                            <option value="pending">Pending</option>
                            <option value="in_progress">In Progress</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary">Create Task</button>
                </form>
            </div>
        </div>
        
        <!-- Tasks List -->
        <div class="card">
            <div class="card-header">
                <h3>All Tasks</h3>
            </div>
            <div class="card-body">
                <?php if (count($tasks) > 0): ?>
                    <div class="table-responsive">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Status</th>
                                    <th>Created</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php foreach ($tasks as $taskItem): ?>
                                    <tr>
                                        <td><?php echo $taskItem['id']; ?></td>
                                        <td><?php echo htmlspecialchars($taskItem['title']); ?></td>
                                        <td><?php echo htmlspecialchars($taskItem['description']); ?></td>
                                        <td>
                                            <span class="badge bg-<?php 
                                                echo $taskItem['status'] == 'completed' ? 'success' : 
                                                    ($taskItem['status'] == 'in_progress' ? 'warning' : 'secondary'); 
                                            ?>">
                                                <?php echo ucfirst(str_replace('_', ' ', $taskItem['status'])); ?>
                                            </span>
                                        </td>
                                        <td><?php echo date('M j, Y', strtotime($taskItem['created_at'])); ?></td>
                                        <td>
                                            <button class="btn btn-sm btn-outline-primary" 
                                                    onclick="editTask(<?php echo htmlspecialchars(json_encode($taskItem)); ?>)">
                                                Edit
                                            </button>
                                            <form method="POST" style="display: inline;">
                                                <input type="hidden" name="action" value="delete">
                                                <input type="hidden" name="id" value="<?php echo $taskItem['id']; ?>">
                                                <button type="submit" class="btn btn-sm btn-outline-danger" 
                                                        onclick="return confirm('Are you sure?')">
                                                    Delete
                                                </button>
                                            </form>
                                        </td>
                                    </tr>
                                <?php endforeach; ?>
                            </tbody>
                        </table>
                    </div>
                <?php else: ?>
                    <p class="text-muted">No tasks found. Create your first task above!</p>
                <?php endif; ?>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        function editTask(task) {
            // You can implement an edit modal or redirect to edit page
            alert('Edit functionality can be implemented with a modal or separate page');
        }
    </script>
</body>
</html>`}
          />
        </div>

        <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle className="text-blue-800 dark:text-blue-200">🎉 Congratulations!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-700 dark:text-blue-300 mb-4">
              You've completed the PHP A to Z course! You now have the knowledge to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-blue-700 dark:text-blue-300">
              <li>Build dynamic web applications with PHP</li>
              <li>Work with databases using PDO</li>
              <li>Handle forms and user input securely</li>
              <li>Implement CRUD operations</li>
              <li>Use object-oriented programming concepts</li>
              <li>Create real-world projects</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </ChapterLayout>
  )
}
