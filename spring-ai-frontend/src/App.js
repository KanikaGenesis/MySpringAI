import React, { useState } from 'react';
import './App.css';
import ImageGenerator  from './components/ImageGenerator';
import ChatComponent  from './components/ChatComponent';
import  RecipeGenerator from './components/RecipeGenerator';

const App = () => {
  const [activeTab, setActiveTab] = useState('image-generator');

  // Tabs configuration for scalability
  const tabs = [
    { id: 'image-generator', label: 'Image Generator', component: <ImageGenerator /> },
    { id: 'chat', label: 'Ask AI', component: <ChatComponent /> },
    { id: 'recipe-generator', label: 'Recipe Generator', component: <RecipeGenerator /> },
  ];

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={activeTab === tab.id ? 'active' : ''}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Content */}
      <div className="tab-content">
        {tabs.find((tab) => tab.id === activeTab)?.component}
      </div>
    </div>
  );
};

export default App;
