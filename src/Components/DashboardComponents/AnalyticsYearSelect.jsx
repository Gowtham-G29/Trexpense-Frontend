import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const years = [
  2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012,
  2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025,
  2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038,
  2039, 2040, 2041, 2042, 2043, 2044, 2045, 2046, 2047, 2048, 2049, 2050,
];

export default function AnalyticsYearSelect({setRequiredYear}) {
  const [year, setYear] = useState(new Date().getFullYear());

  const handleChange = (event) => {
    setYear(event.target.value);
    setRequiredYear(event.target.value)
  };

  return (
    <Box sx={{ width: "10rem" }}>
      <FormControl fullWidth>
        <InputLabel>Year</InputLabel>
        <Select value={year} label="Year" onChange={handleChange}>
          {years.map((year) => (
            <MenuItem value={year} key={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
