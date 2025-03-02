import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Box,
  Typography,
  Card,
  Popover,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import GettingStarted from "./Basics/GettingStarted";
import BasicDetails from "./Basics/BasicDetails";
import MaritalStatus from "./Basics/MaritalStatus";
import ChildrenAndGuardian from "./Nominees/ChildrenAndGuardian";
import PetCareTaker from "./Nominees/PetCareTaker";
import { IoIosArrowDown } from "react-icons/io";
import { FaChevronUp } from "react-icons/fa6";

const tabLabels = [
  {
    id: 1,
    label: "Basics",
    children: [
      { label: "Getting Started", component: <GettingStarted /> },
      { label: "Basic Details", component: <BasicDetails /> },
      { label: "Marital Status", component: <MaritalStatus /> },
    ],
  },
  {
    id: 2,
    label: "Nominees",
    children: [
      {
        label: "Children and Guardian of Minors",
        component: <ChildrenAndGuardian />,
      },
      { label: "Pet care and Pet care takers", component: <PetCareTaker /> },
    ],
  },
  { id: 3, label: "Assets" },
  { id: 4, label: "Residuary" },
  { id: 5, label: "Gifts" },
  { id: 6, label: "Funeral" },
  { id: 7, label: "Provisions" },
  { id: 8, label: "Reviews" },
];

export default function GetStarted() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedChildIndex, setSelectedChildIndex] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
    setSelectedChildIndex(0);
  };

  const handleTabClick = (event, item) => {
    if (item.children) {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    } else {
      setAnchorEl(null);
    }
  };

  const handleChildClick = (index) => {
    setSelectedChildIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const TabPanel = ({ value, index }) => {
    const currentTab = tabLabels[index];

    return (
      <div hidden={value !== index}>
        {value === index && (
          <Box className='p-0 md:p-3'>
            {currentTab.children ? (
              currentTab.children[selectedChildIndex]?.component
            ) : (
              <Typography>{currentTab.label} Content Goes Here</Typography>
            )}
          </Box>
        )}
      </div>
    );
  };

  return (
    <Box className="p-4 w-full max-w-5xl mx-auto">

      <Tabs
        value={selectedTab}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        sx={{ "& .MuiTabs-indicator": { display: "none" } }}
      >
        {tabLabels.map((item, index) => (
          <Tab
            key={item.id}
            label={
              <div
                className="flex flex-col justify-center items-center gap-2"
                onClick={(e) => handleTabClick(e, item)}
              >
                <div
                  className={`w-6 h-6 flex-shrink-0 p-4 border rounded-full flex justify-center items-center ${
                    selectedTab === index
                      ? "border-4 border-info-bg"
                      : "border-gray-400"
                  }`}
                >
                  <span
                    className={`flex justify-center items-center p-[10px] w-full h-full rounded-full ${
                      selectedTab === index ? "bg-info-bg text-white m-1" : ""
                    }`}
                  >
                    {item.id}
                  </span>
                </div>

                <div className="flex items-center justify-between w-full">
                  <span className="text-info-bg">{item.label}</span>
                  {selectedTab === index && item.children && (
                    <span>{open ? <FaChevronUp /> : <IoIosArrowDown />}</span>
                  )}
                </div>
              </div>
            }
          />
        ))}
      </Tabs>

      {tabLabels.map((item, index) => (
        <TabPanel key={item.id} value={selectedTab} index={index} />
      ))}

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <List>
          {tabLabels[selectedTab]?.children?.map((child, index) => (
            <ListItemButton
              key={index}
              onClick={() => handleChildClick(index)}
              selected={selectedChildIndex === index}
            >
              <ListItemText>{child.label}</ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Popover>
    </Box>
  );
}
