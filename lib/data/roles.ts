export const roles = {
  "super-admin": {
    title: "Super Admin",
    description: "Highest level of access with complete system control",
    responsibilities: [
      "Create and manage companies",
      "Assign Management Personnel",
      "Global system configuration",
      "User lifecycle management"
    ],
    permissions: [
      "Full system access",
      "Create/Delete companies",
      "Manage top-level user accounts"
    ]
  },
  "management": {
    title: "Management Personnel",
    description: "Company-level administrators with comprehensive oversight",
    responsibilities: [
      "Create and manage Group Admins",
      "Oversee shift assignments",
      "Approve expenses",
      "Generate comprehensive reports"
    ],
    permissions: [
      "View company-wide data",
      "Create Group Admin accounts",
      "Approve/Reject expenses",
      "Generate analytics reports"
    ]
  },
  "group-admin": {
    title: "Group Admin",
    description: "Department or team-level management",
    responsibilities: [
      "Create and manage employee accounts",
      "Assign shifts",
      "Manage local permissions",
      "Monitor team performance"
    ],
    permissions: [
      "Create employee accounts",
      "Assign and modify shifts",
      "Preliminary expense review",
      "Team performance tracking"
    ]
  },
  "employee": {
    title: "Employee",
    description: "End-user level access for daily operations",
    responsibilities: [
      "Submit attendance",
      "Log work hours",
      "Submit expenses",
      "Comply with geofencing"
    ],
    permissions: [
      "Personal profile management",
      "Expense submission",
      "View personal shifts",
      "Location tracking"
    ]
  }
} as const

export type RoleType = keyof typeof roles