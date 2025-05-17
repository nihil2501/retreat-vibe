// Sample data for service_solicitation toy implementation

// Define government agencies/service providers (solicitors)
const solicitors = [
  {
    id: 1,
    name: "FEMA",
    full_name: "Federal Emergency Management Agency",
    description: "Federal agency responsible for disaster response",
    field_authorities: `{
      residence_location
      property_owner
    }`,
  },
  {
    id: 2,
    name: "SSA",
    full_name: "Social Security Administration",
    description: "Federal agency administering social security programs",
    field_authorities: `{
      age
      name
      address
      current_benefits
    }`,
  },
  {
    id: 3,
    name: "IRS",
    full_name: "Internal Revenue Service",
    description:
      "Federal agency responsible for tax collection and administration",
    field_authorities: `{
      income_bracket
      household_size
    }`,
  },
];

// Define citizens/users (solicited individuals)
const soliciteds = [
  {
    id: 1,
    name: "Jane Smith",
    address: "123 Main St, Asheville, NC 28801",
    email: "jane.smith@example.com",
    data: {
      residence_location: "Asheville, NC",
      age: 36,
      household_size: 3,
      income_bracket: "$50,000-$75,000",
      property_owner: true,
      current_benefits: ["Health Insurance Subsidy"],
    },
  },
  {
    id: 2,
    name: "Robert Johnson",
    address: "456 Pine Rd, Asheville, NC 28805",
    email: "rjohnson@example.com",
    data: {
      residence_location: "Asheville, NC",
      age: 42,
      household_size: 1,
      income_bracket: "$30,000-$50,000",
      property_owner: false,
      current_benefits: ["SNAP", "Housing Assistance"],
    },
  },
  {
    id: 3,
    name: "Maria Garcia",
    address: "789 Oak Ave, Charlotte, NC 28202",
    email: "mgarcia@example.com",
    data: {
      residence_location: "Charlotte, NC",
      age: 28,
      household_size: 4,
      income_bracket: "$75,000-$100,000",
      property_owner: true,
      current_benefits: [],
    },
  },
];

// Define service_solicitation definitions according to model
const service_solicitation_definitions = [
  {
    id: 1,
    solicitor_id: 1, // FEMA
    solicited_query: `{
      solicited(where: { residence_location: "Asheville, NC" }) {
        id
      }
    }`,
    solicited_selection: `{
      residence_location
      name
      address
      property_owner
      household_size
    }`,
    message:
      "FEMA would like to pre-fill a disaster recovery application for you due to recent flooding in Asheville. This would save you time when applying for assistance. Do you consent to sharing the required information?",
    start_at: "2023-11-01T00:00:00Z",
    finish_at: "2023-12-31T23:59:59Z",
  },
  {
    id: 2,
    solicitor_id: 2, // SSA
    solicited_query: `{
      solicited(where: { current_benefits_contains: "Health Insurance Subsidy" }) {
        id
      }
    }`,
    solicited_selection: `{
      age
      name
      address
      income_bracket
    }`,
    message:
      "Social Security Administration would like to pre-fill a healthcare subsidy application for you based on your existing benefits. This would save you time when renewing. Do you consent to us using your information?",
    start_at: "2023-10-15T00:00:00Z",
    finish_at: "2024-01-15T23:59:59Z",
  },
  {
    id: 3,
    solicitor_id: 3, // IRS
    solicited_query: `{
      solicited(where: { OR: [
        { income_bracket: "$30,000-$50,000" },
        { income_bracket: "$50,000-$75,000" }
      ]}) {
        id
      }
    }`,
    solicited_selection: `{
      income_bracket
      name
      household_size
      current_benefits
    }`,
    message:
      "IRS would like to pre-fill your tax credit application forms based on your income bracket. This would save you time during tax filing. Do you consent to us using your information?",
    start_at: "2023-09-01T00:00:00Z",
    finish_at: "2023-12-15T23:59:59Z",
  },
];

// Define individual service_solicitations according to model
const service_solicitations = [
  {
    id: 1,
    service_solicitation_definition_id: 1, // FEMA disaster recovery
    solicited_id: 1, // Jane Smith
    sent_at: "2023-11-02T10:15:30Z",
    resolved_at: null, // Not yet resolved
    resolution: null
  },
  {
    id: 2,
    service_solicitation_definition_id: 1, // FEMA disaster recovery
    solicited_id: 2, // Robert Johnson
    sent_at: "2023-11-02T10:20:45Z",
    resolved_at: "2023-11-03T14:30:22Z",
    resolution: "approved"
  },
  {
    id: 3,
    service_solicitation_definition_id: 3, // IRS tax credits
    solicited_id: 2, // Robert Johnson
    sent_at: "2023-09-05T08:45:12Z",
    resolved_at: "2023-09-07T16:22:05Z",
    resolution: "denied"
  },
  {
    id: 4,
    service_solicitation_definition_id: 2, // SSA benefits
    solicited_id: 3, // Maria Garcia (doesn't match criteria, included for demo)
    sent_at: "2023-10-16T12:30:45Z",
    resolved_at: null,
    resolution: null
  },
  {
    id: 5,
    service_solicitation_definition_id: 2, // SSA benefits
    solicited_id: 2, // Robert Johnson
    sent_at: "2023-11-10T09:45:22Z",
    resolved_at: null,
    resolution: null
  }
];

// Make the data available globally
window.APP_DATA = {
  solicitors,
  soliciteds,
  service_solicitation_definitions,
  service_solicitations,
};
