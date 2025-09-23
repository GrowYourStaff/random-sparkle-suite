import { useState } from 'react';
import { Check, ArrowRight, Star } from 'lucide-react';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const pricingTiers = [
    {
      name: 'Starter Pack',
      accounts: '10 Accounts',
      description: 'Perfect for small businesses getting started with LinkedIn outreach',
      monthlyPrice: 1497,
      annualPrice: 1347, // 10% discount
      popular: false,
      features: [
        'Lead prospecting done for you',
        'Real human-managed accounts',
        'Outreach fully managed',
        'Weekly reporting',
        'Dedicated support',
        'Up to 300 prospects/month',
        'Basic message templates'
      ]
    },
    {
      name: 'Growth Pack',
      accounts: '20 Accounts',
      description: 'Ideal for growing companies ready to scale their outreach',
      monthlyPrice: 2497,
      annualPrice: 2247, // 10% discount
      popular: true,
      features: [
        'Lead prospecting done for you',
        'Real human-managed accounts',
        'Outreach fully managed',
        'Weekly reporting',
        'Dedicated support',
        'Up to 600 prospects/month',
        'Custom message templates',
        'A/B testing included'
      ]
    },
    {
      name: 'Scale Pack',
      accounts: '50 Accounts',
      description: 'For established businesses looking to maximize their reach',
      monthlyPrice: 4997,
      annualPrice: 4497, // 10% discount
      popular: false,
      features: [
        'Lead prospecting done for you',
        'Real human-managed accounts',
        'Outreach fully managed',
        'Weekly reporting',
        'Dedicated support',
        'Up to 1,500 prospects/month',
        'Custom message templates',
        'A/B testing included',
        'Priority support',
        'Custom integrations'
      ]
    }
  ];

  const faqs = [
    {
      question: 'Do you prospect the leads or do I have to provide them?',
      answer: 'We handle all the prospecting for you! Our team researches and identifies high-quality prospects that match your ideal customer profile. You don\'t need to provide lead lists or spend time on manual research - we take care of everything from finding leads to qualifying them before outreach.'
    },
    {
      question: 'Are these real accounts?',
      answer: 'Yes, absolutely. We use genuine, human-managed LinkedIn accounts - not bots or automation tools. Each account is operated by real people who understand LinkedIn\'s best practices and maintain authentic engagement patterns. This ensures higher deliverability, better response rates, and complete compliance with LinkedIn\'s terms of service.'
    },
    {
      question: 'Is this safe for my brand?',
      answer: 'Completely safe. Since we use separate, real LinkedIn accounts (not your company accounts), there\'s zero risk to your brand or existing LinkedIn presence. Our human-managed approach ensures all outreach follows LinkedIn\'s guidelines, and we maintain professional communication standards that reflect positively on your business.'
    },
    {
      question: 'Can I add more accounts later?',
      answer: 'Yes, you can easily upgrade your account pack at any time. Whether you want to scale from 10 to 20 accounts or jump to our Scale Pack, we can accommodate your growing needs. Contact our support team and we\'ll help you transition to a larger pack seamlessly.'
    },
    {
      question: 'Do I need Sales Navigator?',
      answer: 'No, you don\'t need to purchase Sales Navigator. Our team has access to all the prospecting tools and premium LinkedIn features needed to find and qualify your leads. This is all included in your account pack pricing - no additional subscriptions required.'
    },
    {
      question: 'How quickly can you get started?',
      answer: 'We can typically get your campaign up and running within 3-5 business days. This includes account setup, lead research based on your ideal customer profile, and launching your first outreach sequences. You\'ll start seeing replies within the first week.'
    },
    {
      question: 'What kind of reporting do you provide?',
      answer: 'You\'ll receive comprehensive weekly reports showing key metrics like messages sent, connection requests, response rates, meeting bookings, and lead quality scores. We also provide insights and recommendations to continuously improve your campaign performance.'
    },
    {
      question: 'Can I customize the outreach messages?',
      answer: 'Absolutely! We work with you to create personalized message templates that reflect your brand voice and value proposition. Our team will craft compelling sequences that resonate with your target audience, and we continuously optimize based on response rates and feedback.'
    }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose the Right Account Pack
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Pay based on the number of LinkedIn accounts you need. Prospecting included.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                  billingCycle === 'monthly'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                  billingCycle === 'annual'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Annual
                <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  Save 10%
                </span>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                  tier.popular
                    ? 'border-blue-500 scale-105'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {tier.name}
                    </h3>
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      ${billingCycle === 'monthly' ? tier.monthlyPrice.toLocaleString() : tier.annualPrice.toLocaleString()}
                      <span className="text-lg text-gray-600 font-normal">/month</span>
                    </div>
                    <div className="text-lg font-semibold text-gray-700 mb-2">
                      {tier.accounts}
                    </div>
                    <p className="text-gray-600 text-sm">
                      {tier.description}
                    </p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center group ${
                      tier.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Book a Demo
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Enterprise Card */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-center text-white">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">Enterprise</h3>
              <p className="text-xl text-gray-300 mb-6">
                100+ Accounts - Custom Pricing
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                For large organizations needing maximum scale. Includes dedicated account management, 
                custom integrations, priority support, and volume discounts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold text-lg">
                  Contact Sales
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-200 font-semibold text-lg">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our LinkedIn outreach service
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <div className={`transform transition-transform duration-200 ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Scale Your LinkedIn Outreach?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join hundreds of businesses who have transformed their lead generation with Zenvve. 
            Start getting warm replies and booked meetings delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-semibold text-lg shadow-lg">
              Start Your Campaign
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold text-lg">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;