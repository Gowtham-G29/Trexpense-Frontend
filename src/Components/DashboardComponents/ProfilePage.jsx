import React, { useState } from "react";
import { Box, Typography, Avatar, Button, Card } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import imageCompression from "browser-image-compression";
import { updateUserProfile } from "../../Redux/Customer/Action";
import Loader from "../Loader";
import { ERROR_FETCH } from "../../Redux/Error/ActionType";

function ProfilePage({ setOpen }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const { customer } = useSelector((store) => store);

  const dispatch = useDispatch();

  const handleImageChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      try {
        const options = {
          maxSizeMB: 0.1,
          maxWidthOrHeight: 194,
          useWebWorker: true,
        };

        const compressedFile = await imageCompression(file, options);

        const compressedImageUrl = URL.createObjectURL(compressedFile);
        setSelectedImage(compressedImageUrl);

        const formData = new FormData();
        formData.append("profilePicture", compressedFile);

        dispatch(updateUserProfile(formData));
        setOpen(true);
      } catch (error) {
        console.error("Compression failed:", error);
      }
    }
  };


  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      p={3}
      pt={3}
    >
      {customer.loading && <Loader />}
      <Card
        sx={{
          width: { xs: "100%", sm: 400, md: 500 },
          p: { xs: 3, sm: 5 },
          borderRadius: 4,
          boxShadow: 5,
        }}
      >
        <Box display="flex" flexDirection="column" alignItems="center" gap={3}>
          <Box
            display="flex"
            flexDirection={{ xs: "column", sm: "row" }}
            alignItems="center"
            justifyContent="center"
            gap={3}
          >
            <Avatar
              alt="Profile Picture"
              src={
                selectedImage ||
                `data:image/jpeg;base64,${customer?.customerData?.profilePicture}`
              }
              sx={{
                width: { xs: 100, sm: 120 },
                height: { xs: 100, sm: 120 },
                boxShadow: 3,
              }}
            />
            <Button
              variant="outlined"
              component="label"
              sx={{
                fontWeight: 600,
                color: "#1976d2",
                borderColor: "#1976d2",
                ":hover": {
                  backgroundColor: "#1976d2",
                  color: "#fff",
                },
              }}
            >
              Upload <FileUploadIcon />
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleImageChange}
              />
            </Button>
          </Box>

          <Typography
            variant="h5"
            fontWeight="bold"
            textAlign="center"
            color="text.primary"
          >
            {customer?.customerData?.name}
          </Typography>
          <Typography variant="body1" textAlign="center" color="text.secondary">
            {customer?.customerData?.email}
          </Typography>

          <Typography
            variant="h6"
            textAlign="center"
            sx={{
              mt: 1,
              backgroundColor: "#f5f5f5",
              p: 2,
              borderRadius: 2,
              fontWeight: "bold",
              width: "100%",
              boxShadow: 2,
            }}
          >
            Expense Records: {customer?.expenses.length}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}

export default ProfilePage;
