export interface Typeclass {
  id: number;
  name: string;
}

export interface TypeclassColumn {
  field: keyof Typeclass;
  header: string;
}

export interface Method {
  id: number;
  name: string;
}

export interface MethodColumn {
  field: keyof Method;
  header: string;
}
