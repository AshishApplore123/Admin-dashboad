import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import MoneyIcon from "@mui/icons-material/Money";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const MaterialCard = ({ title, var1, var2 }) => {
  return (
    <Card
      style={{
        backgroundColor: "#fff",
        borderRadius: "5px",
        boxShadow: "rgba(0, 0, 0, 0.02) 0px 4px 12px",
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        fontWeight: "600",
        lineHeight: "27px",
        letterSpacing: "2%",
        color: "#001632",
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div" sx={{ pb: 1 }}>
          {title}
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <CreditCardIcon />
          </Grid>
          <Grid item>
            <Typography variant="body1">
              Cypher Pay: <strong>₹{var1}</strong>
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <MoneyIcon />
          </Grid>
          <Grid item>
            <Typography variant="body1">
              Run Paisa: <strong>₹{var2}</strong>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MaterialCard;
