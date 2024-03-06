export interface Case {
    balance:          number | null;
    caseType:         string;
    creditorName:     null | string;
    cseId:            number;
    date:             string;
    debtorName:       string;
    dispId:           string;
    docId:            string | null;
    indications:      any[];
    isCaseFromOffice: boolean;
    isFavorite:       boolean;
    laDate:           string;
    lastActivity:     string;
    myRole:           string;
    note:             null;
    objectionDate:    null;
    office:           string;
    payment:          null;
    statusId:         number;
    statusName:       string;
    toPayment:        boolean;
}