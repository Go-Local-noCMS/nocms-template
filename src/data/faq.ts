export interface FaqCategory {
  title: string;
  items: { question: string; answer: string }[];
}

export const faqCategories: FaqCategory[] = [
  {
    title: "Getting Started",
    items: [
      {
        question: "How do I know when it's time to consider senior living?",
        answer: "Common signs include difficulty managing daily activities like cooking or personal care, increased isolation, safety concerns at home such as falls, or caregiver burnout. We recommend scheduling a complimentary care assessment where our team can help evaluate needs and explore options together.",
      },
      {
        question: "What's the difference between independent living, assisted living, and memory care?",
        answer: "Independent living is for active seniors who want a maintenance-free lifestyle with amenities. Assisted living provides personalized support with daily activities while maintaining independence. Memory care offers specialized, secure environments for those with Alzheimer's or dementia.",
      },
      {
        question: "Can I tour a community before deciding?",
        answer: "Absolutely. We encourage families to visit, meet the team, join for a meal, and experience the atmosphere. We offer in-person and virtual tours seven days a week with no pressure.",
      },
    ],
  },
  {
    title: "Costs & Planning",
    items: [
      {
        question: "How much does senior living at Golden Grove cost?",
        answer: "Costs vary by care level, apartment size, and location. Independent living typically starts from $2,400/month, assisted living from $3,200, and memory care from $4,500. Rates are all-inclusive covering housing, meals, activities, and care services.",
      },
      {
        question: "Does Medicare or insurance cover senior living?",
        answer: "Medicare does not typically cover long-term residential care. However, long-term care insurance, veterans' benefits (Aid & Attendance), and certain Medicaid programs may help. Our financial advisors can help explore all available options.",
      },
      {
        question: "Are there additional fees beyond the monthly rate?",
        answer: "Our pricing is transparent and all-inclusive. The rate covers your residence, meals, utilities, housekeeping, activities, and basic care. Additional services like specialized therapies or salon services carry modest charges, always disclosed upfront.",
      },
    ],
  },
  {
    title: "Daily Life",
    items: [
      {
        question: "What does a typical day look like?",
        answer: "Every day is different, and residents choose their level of participation. A day might include morning exercise, chef-prepared breakfast, an art class, lunch with friends, a garden walk, happy hour, restaurant-style dinner, and evening entertainment. Over 200 activities monthly.",
      },
      {
        question: "Can residents personalize their living spaces?",
        answer: "Yes! We encourage residents to bring furniture, artwork, and personal items. Our team assists with arranging the space, and we accommodate most modifications for comfort.",
      },
      {
        question: "What about dining and dietary needs?",
        answer: "Executive chefs prepare restaurant-quality meals three times daily with fresh, seasonal ingredients. We accommodate all dietary needs including vegetarian, gluten-free, diabetic-friendly, and kosher or halal options. A bistro is available for snacks throughout the day.",
      },
      {
        question: "Can family members visit at any time?",
        answer: "Family is central to everything we do. Visitors are welcome during generous visiting hours. We offer guest suites, private dining rooms, and outdoor spaces for gatherings, plus regular family events and a digital portal for staying connected.",
      },
    ],
  },
];
