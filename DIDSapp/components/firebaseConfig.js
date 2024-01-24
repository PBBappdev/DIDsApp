useEffect(() => {
    // Load textInputs from AsyncStorage when the component mounts
    const loadTextInputs = async () => {
      try {
        const storedTextInputs = await AsyncStorage.getItem('textInputs');
        if (storedTextInputs) {
          setTextInputs(JSON.parse(storedTextInputs));
        }
      } catch (error) {
        console.error('Error loading text inputs from AsyncStorage:', error);
      }
    };
  
    loadTextInputs();
  }, []);