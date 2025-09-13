import { create } from "zustand";
import { type TaskFormState } from "../libs/Task";

export const useTaskFormStore = create<TaskFormState>((set) => ({
  title: "",
  description: "",
  dueDate: "",
  assignees: [],
  setTasks: (title) =>
    set(() => ({
      title: title,
    })),
  setDescription: (description) =>
    set(() => ({
      description: description,
    })),
  setDueDate: (dueDate) =>
    set(() => ({
      dueDate: dueDate,
    })),
  setAssignees: (assignees: string[]) =>
    set(() => ({
      assignees: assignees,
    })),
  resetForm: () =>
    set({
      title: "",
      description: "",
      dueDate: "",
      assignees: [],
    }),
}));
