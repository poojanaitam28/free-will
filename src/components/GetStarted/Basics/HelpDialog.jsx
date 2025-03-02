import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import React from "react";
import { IoCloseSharp } from "react-icons/io5";

const HelpDialog = ({ openDialog, closeDialog, data = {} }) => {
  return (
    <Dialog open={openDialog}>
      <DialogTitle className="!py-2 px-6 bg-[#487799] text-white flex justify-between items-center">
        <span>Help: {data?.title} </span>

        <IconButton onClick={closeDialog} sx={{ color: "white" }}>
          <IoCloseSharp />
        </IconButton>
      </DialogTitle>
      <DialogContent className="p-6 !pt-6">{data?.description}</DialogContent>
      <DialogActions className="bg-[#fafafa]">
        <button
          onClick={closeDialog}
          className="py-2 px-6 text-[#717070] text-14  border border-[#717070] hover:bg-[#717070] hover:text-white "
        >
          Close
        </button>
      </DialogActions>
    </Dialog>
  );
};

export default HelpDialog;
