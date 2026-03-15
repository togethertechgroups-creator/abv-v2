import './ComparePlans.css';

function ComparePlans() {
  const plans = [
    {
      name: 'Lite',
      monthlyPrice: '10,000',
      annualPrice: '1,00,000',
      features: [
        { name: 'Price (Monthly)', lite: 'Rs.10,000', pro: 'Rs.40,000', enterprise: 'Custom' },
        { name: 'Employees Supported', lite: 'Up to 100', pro: 'Up to 250', enterprise: '500+' },
        { name: 'Users', lite: '4', pro: '10', enterprise: 'Unlimited' },
        { name: 'Dashboard', lite: true, pro: true, enterprise: true },
        { name: 'Real-time Tracking', lite: true, pro: true, enterprise: true },
        { name: 'GPS Geofencing', lite: false, pro: true, enterprise: true },
        { name: 'Advanced Analytics', lite: 'Limited', pro: true, enterprise: true },
        { name: 'API Access', lite: false, pro: true, enterprise: true },
        { name: 'Incident Management', lite: false, pro: true, enterprise: true },
        { name: '24/7 Support', lite: 'Email', pro: true, enterprise: true },
        { name: 'Bank Integrations', lite: '2', pro: '5', enterprise: 'Unlimited' },
        { name: 'Custom Integrations', lite: false, pro: 'On-demand', enterprise: true },
      ]
    }
  ];

  const renderValue = (value) => {
    if (typeof value === 'boolean') {
      return value ? <span className="check">✓</span> : <span className="cross">✗</span>;
    }
    return value;
  };

  return (
    <section className="compare-plans section">
      <div className="container">
        <h2 className="section-title">Compare Our Plans</h2>
        <p className="section-subtitle">Choose the perfect plan for your organization</p>
        
        <div className="compare-table">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Lite</th>
                <th>Pro</th>
                <th>Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {plans[0].features.map((feature, idx) => (
                <tr key={idx}>
                  <td className="feature-name">{feature.name}</td>
                  <td>{renderValue(feature.lite)}</td>
                  <td>{renderValue(feature.pro)}</td>
                  <td>{renderValue(feature.enterprise)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default ComparePlans;
