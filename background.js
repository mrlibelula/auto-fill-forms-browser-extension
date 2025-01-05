chrome.runtime.onInstalled.addListener(() => {
  const defaultData = {
    formData: {
      email: "luis@libe.dev",
      password: "password"
    }
  };
  
  chrome.storage.sync.set(defaultData, () => {
    console.log("Default values set");
  });
});
  