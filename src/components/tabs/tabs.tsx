import './tabs.css';
import { useState } from "react";

function Tabs(props: any) {
    // Deconstruct props
    const { tabs } = props

    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="tabs">
            <div className="tab-buttons">
                {
                    tabs.map((tab: any, index: number) => (
                        <button key={index} className={`tab-button ${index === activeTab ? 'active' : ''}`} onClick={() => setActiveTab(index)}>
                            {tab.title}
                        </button>
                    ))
                }
            </div>
            
            <div className="tab-content">
                {tabs[activeTab].content}
            </div>
        </div>
    );
}

export default Tabs;
