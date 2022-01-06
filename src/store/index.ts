import { createStore, Reducer } from "redux";

interface AddSectionAction {
  type: "ADD_SECTION";
  payload: string;
}
interface RemoveSectionAction {
  type: "REMOVE_SECTION";
  payload: string;
}
interface SectionState {
  section: string[];
}
type Action = AddSectionAction | RemoveSectionAction;
export type State = SectionState;

const initState = {
  section: [],
};

const reducer = ((state: State = initState, action: Action) => {
  switch (action.type) {
    case "ADD_SECTION":
      const addSectionPayload = [...state.section];
      if (!addSectionPayload.includes(action.payload)) {
        addSectionPayload.push(action.payload);
      }
      return {
        ...state,
        section: addSectionPayload,
      };
    case "REMOVE_SECTION":
      const removeActionPayload = [...state.section].filter((i) => i !== action.payload);
      return {
        ...state,
        section: removeActionPayload,
      };
    default:
      return state;
  }
}) as Reducer<State, Action>;

export const store = createStore(reducer);
