export interface ThunkOption {
    state?: unknown;
    extra?: unknown;
    rejectValue: string;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
};
