export class Sites {
    id: string;
    domain: string;
    storage: string;
    usedStorage: string;
    domainTag: string;
    availableDomains: number;
    usedDomains: number;
    monthlyVisitorCapacity: number;
    montlyVisitor: number;
    subdomain: any;

    constructor(
        id, domain,
        storage, usedStorage,
        domainTag, availableDomains,
        usedDomains, monthlyVisitorCapacity,
        montlyVisitor, subdomain) {

        this.id = id;
        this.domain = domain;
        this.storage = storage;
        this.usedStorage = usedStorage;
        this.domainTag = domainTag;
        this.availableDomains = availableDomains;
        this.usedDomains = usedDomains;
        this.monthlyVisitorCapacity = monthlyVisitorCapacity;
        this.montlyVisitor = montlyVisitor;
        this.subdomain = subdomain;
    }

}
