export const features = {
  geofencing: {
    title: "Geofencing and Location Tracking",
    description: "Advanced real-time location monitoring and management",
    details: [
      "Real-time geographical monitoring",
      "Customizable geofence zones",
      "Automated entry/exit logging",
      "Compliance and security alerts",
    ],
  },
  "shift-management": {
    title: "Shift Management System",
    description: "Comprehensive shift planning and management solution",
    details: [
      "Dynamic shift creation",
      "Automated scheduling",
      "Attendance tracking",
      "Overtime calculation",
      "Shift swap and management workflows",
    ],
  },
  "expense-management": {
    title: "Expense Management",
    description: "Streamlined expense tracking and approval system",
    details: [
      "Multi-category expense tracking",
      "Photographic receipt upload",
      "Approval workflow",
      "Expense analytics and reporting",
      "Integration with payroll systems",
    ],
  },
} as const;

export type FeatureType = keyof typeof features;
