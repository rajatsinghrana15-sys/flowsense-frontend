import React, { useState } from "react";
import { Search, Check, AlertCircle, Clock } from "lucide-react";

const TaskManagement = ({ limit }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [tasks, setTasks] = useState([
    {
      id: "TSK-1",
      name: "Approve Vendor Invoice #882",
      process: "Invoice Approval",
      priority: "High",
      status: "Pending",
      dueDate: "12 Aug 2026",
    },
    {
      id: "TSK-2",
      name: "Verify Employee Travel Expenses",
      process: "Expense Reimbursement",
      priority: "Medium",
      status: "Pending",
      dueDate: "14 Aug 2026",
    },
    {
      id: "TSK-3",
      name: "Review Customer Onboarding KYC",
      process: "Customer Onboarding",
      priority: "High",
      status: "In Progress",
      dueDate: "11 Aug 2026",
    },
    {
      id: "TSK-4",
      name: "Confirm Purchase Order Receipts",
      process: "Order Processing",
      priority: "Low",
      status: "Completed",
      dueDate: "09 Aug 2026",
    },
    {
      id: "TSK-5",
      name: "Update Master Data Audit Log",
      process: "Compliance Review",
      priority: "Medium",
      status: "Pending",
      dueDate: "16 Aug 2026",
    },
  ]);

  const handleComplete = (taskId) => {
    setTasks(
      tasks.map((t) => (t.id === taskId ? { ...t, status: "Completed" } : t)),
    );
  };

  const filteredTasks = tasks.filter(
    (t) =>
      t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.process.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const displayedTasks = limit ? filteredTasks.slice(0, limit) : filteredTasks;

  return (
    <div className="task-management-module">
      <div className="glass-card table-card">
        <div className="table-controls">
          <div>
            <h3>Task Management</h3>
            <p className="card-subtitle">
              Action items requiring your operational input
            </p>
          </div>
          {!limit && (
            <div className="search-bar sm">
              <Search size={16} />
              <input
                type="text"
                placeholder="Search tasks or processes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          )}
        </div>

        <div className="responsive-table-wrapper">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Task Name</th>
                <th>Process</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Due Date</th>
                <th className="text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {displayedTasks.map((task) => (
                <tr key={task.id}>
                  <td className="font-semibold">{task.name}</td>
                  <td className="text-muted">{task.process}</td>
                  <td>
                    <span
                      className={`priority-badge ${task.priority.toLowerCase()}`}
                    >
                      {task.priority}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`status-pill-sm ${task.status.toLowerCase().replace(" ", "-")}`}
                    >
                      {task.status === "Completed" ? (
                        <Check size={12} />
                      ) : (
                        <Clock size={12} />
                      )}
                      {task.status}
                    </span>
                  </td>
                  <td className="text-muted">{task.dueDate}</td>
                  <td className="text-right">
                    {task.status !== "Completed" ? (
                      <button
                        className="primary-btn sm"
                        onClick={() => handleComplete(task.id)}
                      >
                        <Check size={14} /> Complete
                      </button>
                    ) : (
                      <span className="completed-text">Done</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TaskManagement;
