const initialState = {
  items: [],
  filter: "",
};

export const contactsReduser = (state = initialState, action) => {
  switch (action.type) {
    case "addition": {
      return { ...state, items: [...state.items, action.payload] };
    }
    case "delete": {
      return {
        ...state,
        items: state.items.filter((contact) => contact.id !== action.payload),
      };
    }
    case "search": {
      return {
        ...state,
        filter: action.payload,
      };
    }
    default:
      return state;
  }
};
