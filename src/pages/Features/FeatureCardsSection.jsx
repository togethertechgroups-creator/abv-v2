import './FeatureCardsSection.css';

function FeatureCardsSection() {
  const featureDetails = [
    {
      title: 'Dashboard',
      description: 'Get a complete real-time overview of employee attendance, activity, and key workforce metrics in one centralized view.'
    },
    {
      title: 'Branch Creation',
      description: 'Add, manage, and organize multiple branches to streamline workforce operations across different locations.'
    },
    {
      title: 'Site Management',
      description: 'Real-time attendance and activity tracking to improve efficiency in public sector operations.'
    },
    {
      title: 'User Management',
      description: 'Create users, assign roles, manage permissions, and maintain secure access for all employees.'
    },
    {
      title: 'Leave Management',
      description: 'Approve, reject, and track employee leave requests with automated balance updates and history logs.'
    },
    {
      title: 'Location Tracking',
      description: 'Track employee movement during working hours to ensure transparency and field productivity.'
    }
  ];

  return (
    <section className="feature-cards section">
      <div className="container">
        <h2 className="section-title">Powerful Features for Modern Teams</h2>
        
        <div className="cards-grid">
          {featureDetails.map((feature, idx) => (
            <div key={idx} className="detail-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <a href="#learn-more">Learn More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureCardsSection;
