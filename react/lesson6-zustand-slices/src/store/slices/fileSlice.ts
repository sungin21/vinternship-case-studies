export interface DesignFile {
  id: string;
  name: string;
  content: string;
}

export interface FileSlice {
  files: DesignFile[];

  addFile: (file: DesignFile) => void;
}

export const createFileSlice = (set: any) => ({
  files: [],

  addFile: (file: DesignFile) =>
    set((state: any) => ({
      files: [...state.files, file],
    })),
});