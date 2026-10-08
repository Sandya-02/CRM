import { initialActivities, initialCustomers, initialFollowUps, initialLeads, initialOpportunities, initialUsers } from '../data/mockData'

// The UI consumes the same async-shaped boundary that can later call REST endpoints.
export const crmService = {
  customers: { list: async () => [...initialCustomers] },
  leads: { list: async () => [...initialLeads] },
  opportunities: { list: async () => [...initialOpportunities] },
  followUps: { list: async () => [...initialFollowUps] },
  activities: { list: async () => [...initialActivities] },
  users: { list: async () => [...initialUsers] },
}