import React from "react";
import { Autocomplete } from "@material-ui/lab";
import { Box, TextField } from "@material-ui/core";

function App() {
    const arr1: string[] = ["Arr1 option 1", "Arr1 option 2", "Arr1 option 3"];
    const arr2: string[] = ["Arr2 option 1", "Arr2 option 2", "Arr2 option 3"];
    const arr3: string[] = ["Arr3 option 1", "Arr3 option 2", "Arr3 option 3"];

    return (
        <Box m={2}>
            <Box width={500} maxWidth="100%">
                <Box mb={4}>
                    <Autocomplete
                        id="input1"
                        freeSolo
                        options={arr1}
                        getOptionLabel={(option) => option}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Input 1"
                                variant="outlined"
                            />
                        )}
                    />
                </Box>
                <Box mb={4}>
                    <Autocomplete
                        id="input2"
                        freeSolo
                        options={arr2}
                        getOptionLabel={(option) => option}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Input 2"
                                variant="outlined"
                            />
                        )}
                    />
                </Box>
                <Box mb={4}>
                    <Autocomplete
                        id="input3"
                        freeSolo
                        options={arr3}
                        getOptionLabel={(option) => option}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Input 3"
                                variant="outlined"
                            />
                        )}
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default App;
