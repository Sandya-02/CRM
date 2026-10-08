export type Customer = { id: string; name: string; company: string; email: string; phone: string; status: string; owner: string; city: string; created: string }
export type Lead = { id: string; name: string; company: string; email: string; phone: string; source: string; status: string; rating: string; owner: string; created: string }
export type Opportunity = { id: string; name: string; customer: string; amount: number; stage: string; probability: number; closeDate: string; owner: string }
export type FollowUp = { id: string; subject: string; related: string; type: string; date: string; time: string; owner: string; status: string }
export type ActivityItem = { id: string; type: string; subject: string; description: string; user: string; related: string; time: string }

export const dashboardMetrics = [
  { label: 'Total customers', value: '1,248', delta: '+8.2%', icon: 'customers', tone: 'mint' },
  { label: 'Total leads', value: '386', delta: '+12.4%', icon: 'leads', tone: 'blue' },
  { label: 'Open leads', value: '214', delta: '+6.1%', icon: 'open-leads', tone: 'gold' },
  { label: 'Opportunities', value: '156', delta: '+4.6%', icon: 'opportunities', tone: 'rose' },
  { label: 'Pipeline value', value: '₹24.8L', delta: '+18.1%', icon: 'pipeline', tone: 'mint' },
  { label: 'Won opportunities', value: '72', delta: '+9.3%', icon: 'won', tone: 'blue' },
  { label: 'Lost opportunities', value: '31', delta: '−2.4%', icon: 'lost', tone: 'gold' },
  { label: 'Follow-ups due', value: '18', delta: 'Today', icon: 'follow-ups', tone: 'rose' },
]

export const initialCustomers: Customer[] = [
  { id: 'CUS-10482', name: 'Ananya Rao', company: 'Vertex Labs', email: 'ananya.rao@vertexlabs.in', phone: '+91 98450 22148', status: 'Active', owner: 'Sandya Kandi', city: 'Bengaluru', created: 'Oct 02, 2026' },
  { id: 'CUS-10476', name: 'Rohan Malhotra', company: 'Northstar Retail', email: 'rohan@northstar.in', phone: '+91 98110 53742', status: 'Active', owner: 'Priya Sharma', city: 'Mumbai', created: 'Sep 28, 2026' },
  { id: 'CUS-10453', name: 'Meera Nair', company: 'Meridian Health', email: 'meera.nair@meridian.in', phone: '+91 98470 11809', status: 'Prospect', owner: 'Arjun Mehta', city: 'Kochi', created: 'Sep 24, 2026' },
  { id: 'CUS-10429', name: 'Vikram Iyer', company: 'Bluepeak Systems', email: 'vikram@bluepeak.io', phone: '+91 98451 78142', status: 'Active', owner: 'Sandya Kandi', city: 'Bengaluru', created: 'Sep 19, 2026' },
  { id: 'CUS-10411', name: 'Neha Kapoor', company: 'Olive & Oak', email: 'neha@oliveoak.in', phone: '+91 98201 46024', status: 'Inactive', owner: 'Rahul Menon', city: 'Pune', created: 'Sep 14, 2026' },
  { id: 'CUS-10398', name: 'Kabir Desai', company: 'Aster Financial', email: 'kabir@asterfin.in', phone: '+91 98250 39421', status: 'Active', owner: 'Priya Sharma', city: 'Ahmedabad', created: 'Sep 11, 2026' },
  { id: 'CUS-10376', name: 'Tara Krishnan', company: 'Fieldnote Media', email: 'tara@fieldnote.in', phone: '+91 98400 29876', status: 'Prospect', owner: 'Sandya Kandi', city: 'Chennai', created: 'Sep 08, 2026' },
]
export const initialLeads: Lead[] = [
  { id: 'LEA-20845', name: 'Neha Kapoor', company: 'Olive & Oak', email: 'neha@oliveoak.in', phone: '+91 98201 46024', source: 'Referral', status: 'Qualified', rating: 'Hot', owner: 'Sandya Kandi', created: 'Oct 07, 2026' },
  { id: 'LEA-20839', name: 'Vikram Iyer', company: 'Bluepeak Systems', email: 'vikram@bluepeak.io', phone: '+91 98451 78142', source: 'Website', status: 'Converted', rating: 'Warm', owner: 'Arjun Mehta', created: 'Oct 05, 2026' },
  { id: 'LEA-20821', name: 'Sana Qureshi', company: 'Atlas Learning', email: 'sana@atlaslearn.in', phone: '+91 98703 28411', source: 'Campaign', status: 'Contacted', rating: 'Warm', owner: 'Priya Sharma', created: 'Oct 04, 2026' },
  { id: 'LEA-20796', name: 'Dev Patel', company: 'Horizon Foods', email: 'dev@horizonfoods.in', phone: '+91 98251 77530', source: 'Social Media', status: 'New', rating: 'Hot', owner: 'Sandya Kandi', created: 'Oct 01, 2026' },
  { id: 'LEA-20774', name: 'Ishita Bose', company: 'Lumen Energy', email: 'ishita@lumenenergy.in', phone: '+91 98300 45111', source: 'Advertisement', status: 'Qualified', rating: 'Warm', owner: 'Rahul Menon', created: 'Sep 29, 2026' },
  { id: 'LEA-20751', name: 'Armaan Gill', company: 'Kindred Logistics', email: 'armaan@kindred.in', phone: '+91 98140 61788', source: 'Other', status: 'Lost', rating: 'Cold', owner: 'Arjun Mehta', created: 'Sep 27, 2026' },
]
export const initialOpportunities: Opportunity[] = [
  { id: 'OPP-30122', name: 'Enterprise platform rollout', customer: 'Vertex Labs', amount: 840000, stage: 'Negotiation', probability: 75, closeDate: 'Oct 28, 2026', owner: 'Sandya Kandi' },
  { id: 'OPP-30118', name: 'Regional expansion', customer: 'Northstar Retail', amount: 620000, stage: 'Proposal', probability: 60, closeDate: 'Nov 06, 2026', owner: 'Priya Sharma' },
  { id: 'OPP-30107', name: 'Patient engagement suite', customer: 'Meridian Health', amount: 490000, stage: 'Qualification', probability: 40, closeDate: 'Nov 15, 2026', owner: 'Arjun Mehta' },
  { id: 'OPP-30096', name: 'Data modernization', customer: 'Bluepeak Systems', amount: 375000, stage: 'Prospecting', probability: 20, closeDate: 'Dec 02, 2026', owner: 'Sandya Kandi' },
  { id: 'OPP-30082', name: 'Annual services renewal', customer: 'Aster Financial', amount: 280000, stage: 'Closed Won', probability: 100, closeDate: 'Oct 04, 2026', owner: 'Priya Sharma' },
]
export const initialFollowUps: FollowUp[] = [
  { id: 'FOL-40817', subject: 'Discovery call', related: 'Meridian Health', type: 'Call', date: '2026-10-08', time: '10:30 AM', owner: 'Arjun Mehta', status: 'Pending' },
  { id: 'FOL-40812', subject: 'Proposal review', related: 'Vertex Labs', type: 'Meeting', date: '2026-10-08', time: '1:00 PM', owner: 'Sandya Kandi', status: 'Pending' },
  { id: 'FOL-40798', subject: 'Send pricing details', related: 'Olive & Oak', type: 'Email', date: '2026-10-07', time: '3:30 PM', owner: 'Sandya Kandi', status: 'Overdue' },
  { id: 'FOL-40787', subject: 'Quarterly check-in', related: 'Aster Financial', type: 'Call', date: '2026-10-09', time: '11:00 AM', owner: 'Priya Sharma', status: 'Pending' },
  { id: 'FOL-40766', subject: 'Contract signature', related: 'Northstar Retail', type: 'Task', date: '2026-10-06', time: '4:00 PM', owner: 'Rahul Menon', status: 'Completed' },
]
export const initialActivities: ActivityItem[] = [
  { id: 'ACT-1', type: 'Call', subject: 'Discovery call completed', description: 'Discussed rollout timeline and key requirements.', user: 'Sandya Kandi', related: 'Vertex Labs', time: '10:42 AM' },
  { id: 'ACT-2', type: 'Email', subject: 'Proposal sent', description: 'Shared the updated enterprise proposal for review.', user: 'Priya Sharma', related: 'Northstar Retail', time: '9:18 AM' },
  { id: 'ACT-3', type: 'Meeting', subject: 'Product walkthrough', description: 'Demo booked with the customer operations team.', user: 'Arjun Mehta', related: 'Meridian Health', time: 'Yesterday' },
  { id: 'ACT-4', type: 'Note', subject: 'Lead qualified', description: 'Confirmed budget and decision-making process.', user: 'Sandya Kandi', related: 'Olive & Oak', time: 'Yesterday' },
  { id: 'ACT-5', type: 'Task', subject: 'Renewal follow-up completed', description: 'Confirmed next steps for the annual renewal.', user: 'Rahul Menon', related: 'Aster Financial', time: 'Oct 06' },
]
export const initialUsers = [
  { name: 'Sandya Kandi', email: 'sandya.kandi@acxiom.com', role: 'Sales Executive', status: 'Active', created: 'Jan 12, 2025' },
  { name: 'Priya Sharma', email: 'priya.sharma@acxiom.com', role: 'Manager', status: 'Active', created: 'Jan 12, 2025' },
  { name: 'Arjun Mehta', email: 'arjun.mehta@acxiom.com', role: 'Sales Executive', status: 'Active', created: 'Feb 03, 2025' },
  { name: 'Rahul Menon', email: 'rahul.menon@acxiom.com', role: 'Sales Executive', status: 'Inactive', created: 'Mar 19, 2025' },
  { name: 'Admin User', email: 'admin@acxiom.com', role: 'Admin', status: 'Active', created: 'Jan 08, 2025' },
]