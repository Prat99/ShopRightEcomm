import {
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

enum addressTypeEnum {
  Home = "Home",
  Work = "Work",
}

type Inputs = {
  name: string;
  phoneNo: string;
  pincode: number;
  locality: string;
  address: string;
  city: string;
  state: string;
  addressType: addressTypeEnum;
};

const Checkout = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) =>
    console.log("form  data ==>", data);

  return (
    <Stack>
      <Typography variant="h6">Delivery Address</Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormControl fullWidth={true}>
              <TextField label="Name" {...register("name")} />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth={true}>
              <TextField
                label="PhoneNo"
                {...register("phoneNo", { required: true })}
              />
              {errors.phoneNo && <span>This field is required</span>}
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth={true}>
              <TextField
                label="Pincode"
                {...register("pincode", { required: true })}
              />
              {errors.pincode && <span>This field is required</span>}
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth={true}>
              <TextField label="locality" {...register("locality")} />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth={true}>
              <TextField
                label="Address"
                {...register("address")}
                multiline={true}
                rows={2}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth={true}>
              <TextField label="city" {...register("city")} />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth={true}>
              <TextField label="State" select={true} {...register("state")}>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Tamilnadu">Tamilnadu</option>
                <option value="UttarPradesh">Uttarpradesh</option>
              </TextField>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" component="legend">
              Address Type
            </Typography>
            <RadioGroup row>
              {[
                { label: "Home", value: "home" },
                { label: "Office", value: "office" },
              ].map((option) => (
                <FormControlLabel
                  key={option.value}
                  control={<Radio />}
                  label={option.label}
                />
              ))}
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              type="submit"
              sx={{ mt: 2, width: "100%" }}
              fullWidth={true}
            >
              Save Delivery Address
            </Button>
          </Grid>
        </Grid>
        {/* register your input into the hook by invoking the "register" function */}

        {/* include validation with required or other standard HTML validation rules */}

        {/* errors will return when field validation fails  */}
      </form>
    </Stack>
  );
};

export default Checkout;
