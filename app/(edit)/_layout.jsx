import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const Edit = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="edit-profile"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default Edit;
