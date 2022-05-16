import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Typography from '@mui/material/Typography';


const PCard = ({ productInfo }) => {
  return (
    <div>
      <Card elevation={5}>
        <CardHeader
          action={
            <IconButton>
              <MoreVertIcon /> 
            </IconButton>
          }
          title={productInfo.SystemName}
          subheader={productInfo.ProcessorName}
        />
        <CardContent>
          <Typography variant="body2" text="textSecondary">
            Memory: {productInfo.Memory} 
          </Typography>
          <Typography variant="body2" text="textSecondary">
            Rating: {productInfo.Grade}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default PCard;
