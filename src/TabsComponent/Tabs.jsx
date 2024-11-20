import { useState } from "react";

export default function Tabs({
  tabsData = [],
  activeTabIndex = 0,
  tabStyle = {},
  activeTabStyle = {},
  contentStyle = {},
  orientation = "horizontal",
  className = "",
  ...props
}) {
  const [activeTab, setActiveTab] = useState(activeTabIndex);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const isHorizontal = orientation === "horizontal";
  const tabContainerStyle = {
    display: "flex",
    flexDirection: isHorizontal ? "row" : "column",
    alignItems: isHorizontal ? "center" : "flex-start",
  };

  return (
    <div className={className}>
      <div style={tabContainerStyle} className="tabs-header">
        {tabsData.map((tab, index) => {
         return ( <div
            key={index}
            className={`tab ${activeTab === index ? "active-tab" : ""}`}
            style={{
              ...tabStyle,
              ...(activeTab === index ? activeTabStyle : {}),
              cursor: "pointer",
            }}
            onClick={()=>handleTabClick(index)}
          >
            {tab.title}
          </div>
        )
        })}
      </div>
      <div
        className="tab-content"
        style={{ ...contentStyle, marginTop: isHorizontal ? "1rem" : "0" }}
      >
        {tabsData[activeTab]?.content}
      </div>
    </div>
  );
}
