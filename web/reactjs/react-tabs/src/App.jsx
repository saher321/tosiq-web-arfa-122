import React, { useState } from 'react'
import TabContent from './components/tabs/TabContent'

const App = () => {
  const [activeTab, setActiveTab] = useState("preferences")

  const changeTab = (tabName) => {
    setActiveTab(tabName)
  }

  return (
    <div>
      <div className='mt-5 p-5 rounded-lg shadow bg-white mx-auto max-w-lg'>
        {/* tab buttons */}
        <div className='flex gap-5 border-b border-gray-300'>
          <button className={`${activeTab=="preferences" ? "text-black border-b": "text-gray-400"}`} 
          onClick={() => changeTab("preferences")}>
            Preferences
          </button>
          <button className={`${activeTab=="settings" ? "text-black border-b": "text-gray-400"}`} 
          onClick={() => changeTab("settings")}>
            Settings
          </button>
          <button className={`${activeTab=="outsource" ? "text-black border-b": "text-gray-400"}`} 
          onClick={() => changeTab("outsource")}>
            Out source
          </button>
        </div>

        {/* tab content */}
        <div>
          {
            activeTab == "preferences" ?
            <TabContent>
              Preferences tab
            </TabContent> :
            activeTab == "settings" ?
            <TabContent>
              Settings tab
            </TabContent> :
            activeTab == "outsource" &&
            <TabContent>
              Out source tab
            </TabContent>
          }
        </div>
      </div>
    </div>
  )
}

export default App