import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-site-details',
  templateUrl: './site-details.component.html',
  styleUrls: ['./site-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SiteDetailsComponent implements OnInit {

  addNewSiteBtn = {
    name: 'Add New Site',
    style: {
      'border': 0,
      'font-weight': 500,
      'cursor': 'pointer'
    }
  };

  dialogProperties: any = {
    id: 'addDomain',
    enableDialog: false,
    header: '',
    close: true
  };

  counterValue = 10;
  search: any = '';

  sitetableHeaderData = [
    {
      label: 'Domain & Plan Name',
      style: {
        'width': '27%',
        'padding-left': '20px'
      }
    },
    {
      label: 'Storage',
      style: {
        'width': '23%'
      }
    },
    {
      label: 'Monthly Visitor',
      style: {
        'width': '20%'
      }
    },
    {
      label: 'Domains',
      style: {
        'width': '15%'
      }
    },
    {
      label: 'Status',
      style: {
        'width': '15%'
      }
    },
  ];

  sitetableHeaderProperties = {
    'background': 'var(--tableHeader)',
    'color': 'var(--sixteen)',
    'border-radius': '10px',
    'font-weight': 'bold',
    'font-size': '14px',
    'height': '50px'
  };

  sitetableRows: any = [];
  domainsList: any = [];

  constructor (public globalservice: GlobalService) {
  }

  ngOnInit() {
    this.getsiteDetails();
  }

  getsiteDetails() {
    this.globalservice.getSiteList().subscribe((response) => {
      this.domainsList = [...response];
      this.sitetableRows = undefined;
      this.sitetableRows = [...this.setDetails(this.domainsList)];
    }, error => {
      console.log('Error on getting db.json file', error);
    });
  }

  setDetails(domainList) {
    const appliedDetails: any = [];
    domainList.forEach((eachDomain: any, i) => {
      const eachRow: any = {
        id: eachDomain.id,
        type: 'Accordion',
        open: false,
        style: {
          'margin-top': '25px'
        },
        header: {
          style: {
            'background': 'white',
            'border-radius': '10px',
            'padding': '20px 0',
            'min-height': '60px'
          },
          data: [
            {
              type: 'label',
              label: eachDomain.domain,
              labelStyle: {
                'font-size': '16px',
                'font-weight': 'bold',
                'color': 'var(--eleven)'
              },
              profPlan: true,
              style: {
                'width': '27%',
                'padding-left': '20px'
              }
            }
          ]
        },
        tail: {
          style: {
            'background': 'var(--tableHeader)',
            'border-bottom-left-radius': '10px',
            'border-bottom-right-radius': '10px',
            'padding': '20px 0 0 0'
          },
          eachTailStyle: {
            'padding': '0 0 20px 0'
          },
          data: [
          ]
        }
      };
      const domainTag: any = this.applyDomainTag(eachDomain.domainTag);
      eachRow.header.data.push(this.applyProgressBar(eachDomain.storage, eachDomain.usedStorage));
      eachRow.header.data.push(this.applyVisitor(eachDomain, domainTag.fontColor));
      eachRow.header.data.push(this.domainProgress(eachDomain));
      eachRow.header.data.push(this.applyStatus(eachDomain.status));

      if (eachDomain.subdomain && eachDomain.subdomain.length) {
        eachDomain.subdomain.forEach((eachSubDomain: any) => {
          const subDomainRow: any = [];
          subDomainRow.push({
            type: 'label',
            label: eachSubDomain.name,
            labelStyle: {
              'font-size': '16px',
              'font-weight': 'bold',
              'color': 'var(--eleven)'
            },
            style: {
              'width': '27%',
              'padding-left': '20px'
            }
          });
          const subdomainTag: any = this.applyDomainTag(eachSubDomain.domainTag);
          subDomainRow.push(this.applyProgressBar(eachDomain.storage, eachSubDomain.usedStorage));
          subDomainRow.push(this.applyVisitor(eachSubDomain, subdomainTag.fontColor));
          subDomainRow.push(subdomainTag);
          subDomainRow.push(this.applyStatus(eachSubDomain.status));
          eachRow.tail.data.push(subDomainRow);
        });
      }
      appliedDetails.push(eachRow);
    });
    return appliedDetails;
  }

  applyProgressBar(storage: any, usedStorage: any) {
    const progress: any = {
      type: 'pBar',
      value: 0,
      label: '',
      labelStyle: {
        'font-weight': 'bold',
        'font-size': '14px',
        'color': 'var(--sixteen)'
      },
      style: {
        'width': '23%'
      }
    };
    storage = Number(storage.split('gb')[0]);
    usedStorage = Number(usedStorage.split('gb')[0]);
    progress.value = (usedStorage * 100) / storage;
    progress.label = `${usedStorage} GB of ${storage} GB`;
    return progress;
  }

  applyVisitor(domain, color) {
    const VisitorValue: any = {
      type: 'view',
      label: domain.montlyVisitor ? domain.montlyVisitor + 'M' : '-',
      labelStyle: {
        'font-weight': 'bold',
        'font-size': '14px',
        'color': 'var(--sixteen)'
      },
      style: {
        'width': '20%',
        'padding-left': '2px'
      },
      dot: {
        'border': `5px solid ${color}`,
        'border-radius': '4px',
        'margin-left': '5px'
      }
    };
    if (!domain.montlyVisitor) {
      delete VisitorValue.dot;
    }
    return VisitorValue;
  }

  domainProgress(domain) {
    const progress: any = {
      type: 'pCircle',
      style: {
        'width': '15%'
      },
      circleProperty: {
        width: '70px',
        mainFont: {
            size: '25px',
            color: 'var(--one)'
          },
        mainDy: '0em',
        mainY: '50%',
        label: '',
        value: 0 ,
        circleColor: 'var(--one)'
      },
      checkStrokeWidth: 4
    };
    progress.circleProperty.label = `${domain.usedDomains}/${domain.availableDomains}`;
    progress.circleProperty.value = (domain.usedDomains * 100) / domain.availableDomains;
    return progress;
  }

  applyDomainTag(domainTag) {
    const domainValue: any = {
      type: 'button',
      style: {
        'width': '15%'
      },
      btnProperty: {
        name: '',
        style: {
          'border': 0
        }
      },
      background: '',
      fontColor: '',
      height: '35px',
      width: '70px'
    };

    switch (domainTag) {
      case 'Primary': {
        domainValue.btnProperty.name = domainTag;
        domainValue.background = 'var(--blueShade)';
        domainValue.fontColor = 'var(--one)';
        break;
      }
      case 'Staging': {
        domainValue.btnProperty.name = domainTag;
        domainValue.background = 'var(--nine)';
        domainValue.fontColor = 'var(--pink)';
        break;
      }
      case 'Add On': {
        domainValue.btnProperty.name = 'Add-on';
        domainValue.background = 'var(--orangeFade)';
        domainValue.fontColor = 'var(--three)';
        break;
      }
      default: {
        domainValue.btnProperty.name = domainTag;
        domainValue.background = 'var(--blueShade)';
        domainValue.fontColor = 'var(--one)';
        break;
      }
    }
    return domainValue;
  }

  applyStatus(status) {
    const statusValue: any = {
      type: 'button',
      style: {
        'width': '15%'
      },
      btnProperty: {
        name: '',
        style: {
          'border': 0
        }
      },
      background: '',
      fontColor: '',
      height: '35px',
      width: '75px'
    };
    if (status && status === 'Inactive') {
      statusValue.btnProperty.name = status;
      statusValue.background = 'var(--redShade)';
      statusValue.fontColor = 'var(--red)';
    } else {
      statusValue.btnProperty.name = 'Active';
      statusValue.background = 'var(--blueShade)';
      statusValue.fontColor = 'var(--one)';
    }
    return statusValue;
  }

  closeDialog(id) {
    this.dialogProperties.header = '';
    this.dialogProperties.enableDialog = false;
  }

  submitDialog(siteDetail) {
    const domain: any = {
      id: Math.floor(Math.random() * 1000) + 1,
      domain: siteDetail.domainName,
      storage: `${siteDetail.storage}gb`,
      usedStorage: '0gb',
      domainTag: 'Primary',
      availableDomains: 10,
      usedDomains: 5,
      montlyVisitor: Number(siteDetail.monthlyVisitor)
    };
    if (siteDetail.subDomainList && siteDetail.subDomainList.length) {
      const subDomain: any = [];
      siteDetail.subDomainList.forEach((each: any) => {
        subDomain.push({
          id: Math.floor(Math.random() * 1000) + 1,
          name: each.name,
          usedStorage: '0gb',
          domainTag: 'Staging',
          montlyVisitor: 0
        });
      });
      domain['subdomain'] = [...subDomain];
    }
    this.globalservice.createSite(domain).subscribe((response) => {
      this.domainsList.push(response);
      this.filterRecords();
    }, error => {
      console.log('Error on creating a object in db.json file', error);
    });
  }

  addSiteDialogTrigger(event) {
    this.dialogProperties.header = 'Add Domain Details';
    this.dialogProperties.enableDialog = true;
  }

  updateCounter(counter) {
    this.counterValue = counter;
    this.filterRecords();
  }

  searchRecord(searchValue) {
    this.search = searchValue;
    this.filterRecords();
  }

  filterRecords() {
    let filteredValues: any = [];
    if (this.search && this.search.length) {
      filteredValues = this.domainsList.filter((eachDomain: any) => {
        const lowerCaseDomain: any = eachDomain.domain.toLowerCase();
        return lowerCaseDomain.includes(this.search.toLowerCase());
      });
    } else {
      filteredValues = this.domainsList;
    }
    filteredValues = filteredValues.slice(0, this.counterValue);
    this.sitetableRows = undefined;
    this.sitetableRows = [...this.setDetails(filteredValues)];
  }
}
