module.exports = api =

// THIS CODE WAS GENERATED BY AN AUTOMATED TOOL. Editing it is not recommended.
// For more information, see http://github.com/bvalosek/grunt-infusionsoft
// Generated on Fri Aug 09 2013 00:43:59 GMT-0500 (CDT)

{

    services:
    {
        IDataService: require('./services/IDataService'),
        IAffiliateService: require('./services/IAffiliateService'),
        IContactService: require('./services/IContactService'),
        IDiscountService: require('./services/IDiscountService'),
        IAffiliateProgramService: require('./services/IAffiliateProgramService'),
        IFunnelService: require('./services/IFunnelService'),
        IFileService: require('./services/IFileService'),
        IEmailService: require('./services/IEmailService'),
        IOrderService: require('./services/IOrderService'),
        IInvoiceService: require('./services/IInvoiceService'),
        IProductService: require('./services/IProductService'),
        ISearchService: require('./services/ISearchService'),
        IShippingService: require('./services/IShippingService'),
        IWebFormService: require('./services/IWebFormService')
    },

    tables:
    {
        UserGroup: require('./tables/UserGroup'),
        GroupAssign: require('./tables/GroupAssign'),
        User: require('./tables/User'),
        Template: require('./tables/Template'),
        Contact: require('./tables/Contact'),
        Campaignee: require('./tables/Campaignee'),
        Company: require('./tables/Company'),
        MtgLead: require('./tables/MtgLead'),
        CampaignStep: require('./tables/CampaignStep'),
        Stage: require('./tables/Stage'),
        Lead: require('./tables/Lead'),
        Status: require('./tables/Status'),
        ProductInterest: require('./tables/ProductInterest'),
        StageMove: require('./tables/StageMove'),
        ProductInterestBundle: require('./tables/ProductInterestBundle'),
        SubscriptionPlan: require('./tables/SubscriptionPlan'),
        CProgram: require('./tables/CProgram'),
        ProductOptValue: require('./tables/ProductOptValue'),
        ProductCategoryAssign: require('./tables/ProductCategoryAssign'),
        Product: require('./tables/Product'),
        ProductOption: require('./tables/ProductOption'),
        ProductCategory: require('./tables/ProductCategory'),
        CreditCard: require('./tables/CreditCard'),
        RecurringOrderWithContact: require('./tables/RecurringOrderWithContact'),
        RecurringOrder: require('./tables/RecurringOrder'),
        ContactGroup: require('./tables/ContactGroup'),
        ContactGroupCategory: require('./tables/ContactGroupCategory'),
        LeadSource: require('./tables/LeadSource'),
        LeadSourceCategory: require('./tables/LeadSourceCategory'),
        Campaign: require('./tables/Campaign'),
        ContactGroupAssign: require('./tables/ContactGroupAssign'),
        Invoice: require('./tables/Invoice'),
        Affiliate: require('./tables/Affiliate'),
        AffResource: require('./tables/AffResource'),
        Referral: require('./tables/Referral'),
        InvoicePayment: require('./tables/InvoicePayment'),
        InvoiceItem: require('./tables/InvoiceItem'),
        PayPlanItem: require('./tables/PayPlanItem'),
        Payment: require('./tables/Payment'),
        PayPlan: require('./tables/PayPlan'),
        CCharge: require('./tables/CCharge'),
        Job: require('./tables/Job'),
        ActionSequence: require('./tables/ActionSequence'),
        OrderItem: require('./tables/OrderItem'),
        JobRecurringInstance: require('./tables/JobRecurringInstance'),
        ContactAction: require('./tables/ContactAction'),
        TicketStage: require('./tables/TicketStage'),
        TicketType: require('./tables/TicketType'),
        DataFormTab: require('./tables/DataFormTab'),
        Ticket: require('./tables/Ticket'),
        DataFormField: require('./tables/DataFormField'),
        DataFormGroup: require('./tables/DataFormGroup'),
        Expense: require('./tables/Expense'),
        LeadSourceExpense: require('./tables/LeadSourceExpense'),
        LeadSourceRecurringExpense: require('./tables/LeadSourceRecurringExpense'),
        FileBox: require('./tables/FileBox'),
        SavedFilter: require('./tables/SavedFilter')
    }

}