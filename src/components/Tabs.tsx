import React, { useState } from 'react';

interface Tab {
    label: string;
    content: React.ReactNode;
}

interface TabsProps {
    tabs: Tab[];
}

const TabContainer: React.FC<TabsProps> = ({ tabs }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleTabClick = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div>
            <TabTriggers>
                {tabs.map((tab, index) => (
                    <TabButton key={index} isActive={index === activeIndex} onClick={() => handleTabClick(index)}>
                        {tab.label}
                    </TabButton>
                ))}
            </TabTriggers>
            <TabPanel>
                {tabs.map((tab, index) => (
                    <TabContent key={index} isActive={index === activeIndex}>
                        {tab.content}
                    </TabContent>
                ))}
            </TabPanel>
        </div>
    );
};

const TabTriggers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div className="flex rounded-lg lg:max-w-[360px] h-[50px] font-medium overflow-hidden mt-10 mb-5">{children}</div>;
};

interface TabButtonProps {
    isActive: boolean;
    onClick: () => void;
    children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({ isActive, onClick, children }) => {
    return (
        <button onClick={onClick} className={`transition-all w-full ${isActive ? 'bg-primary text-white' : 'bg-white text-black'}`}>
            {children}
        </button>
    );
};

const TabPanel: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div>{children}</div>;
};

const TabContent: React.FC<{ isActive: boolean; children: React.ReactNode }> = ({ isActive, children }) => {
    return isActive ? <p className="mb-8">{children}</p> : null;
};

export default TabContainer;
