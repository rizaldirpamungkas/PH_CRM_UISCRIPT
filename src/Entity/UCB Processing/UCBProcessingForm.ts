export class UCBProcessingForm
{
    static async showPrintLabels(recId: any, entityType: number) : Promise<void>
    {
        let parameters = {
            "recId" : recId[0].replace("{","").replace("}","").toString(),
            "entityType": entityType
        }

        let customPage = "cgl_printlabelsprinterlist_b36b3";

        const pageInput: Xrm.Navigation.CustomPage = {
            pageType: "custom",
            name: customPage,
            recordId: JSON.stringify(parameters)
        };

        const navigationOption: Xrm.Navigation.NavigationOptions = {
            target: 2,
            position: 2,
            width: {value: 70, unit: "%"},
            title: "Print Labels"
        };

        Xrm.Navigation.navigateTo(pageInput, navigationOption);
    }
}