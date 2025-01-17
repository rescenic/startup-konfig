/*
 * splitit-web-api-v3
 *
 * Splitit's API
 *
 * The version of the OpenAPI document: 1.0.0
 * Generated by: https://konfigthis.com
 */

using System;
using Xunit;

using CsharpSplitit.Net.Model;
using CsharpSplitit.Net.Client;
using CsharpSplitit.Net.Api;

namespace CsharpSplitit.Net.Test.Api
{
    /// <summary>
    ///  Class for testing InstallmentPlanApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by Konfig (https://konfigthis.com).
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    public class SimpleInstallmentPlanApiTests : IDisposable
    {
        private InstallmentPlanApi instance;

        public SimpleInstallmentPlanApiTests()
        {
            Configuration config = new Configuration();
            string clientId = "dummy";
            string clientSecret = "dummy";
            config.OAuthClientId = clientId;
            config.OAuthClientSecret = clientSecret;
            config.BasePath = "http://127.0.0.1:4008";
            config.OAuthTokenUrl = "http://127.0.0.1:4008/token";
            instance = new InstallmentPlanApi(config);
        }

        public void Dispose()
        {
            // Cleanup when everything is done.
        }

        [Fact]
        public void SimplePostTest()
        {
            PlanDataModel planData = new PlanDataModel();
            planData.TotalAmount = 10;
            planData.NumberOfInstallments = 10;
            planData.Currency = "USD";
            planData.PurchaseMethod = PurchaseMethod.InStore;

            ShopperData shopper = new ShopperData();
            shopper.Email = "fake@email.com";

            AddressDataModel address = new AddressDataModel();
            address.AddressLine1 = "144 Union St";
            address.City = "Brooklyn";
            address.State = "North Dakota";
            address.Zip = "11231";
            address.Country = "United States";

            CardData card = new CardData();
            card.CardCvv = "111";
            card.CardExpMonth = "12";
            card.CardExpYear = "2025";
            card.CardNumber = "4556997457604103";
            card.CardHolderFullName = "Test User";

            InitiateRedirectionEndpointsModel redirectUrls = new InitiateRedirectionEndpointsModel();

            InstallmentPlanInitiateRequest createRequest = new InstallmentPlanInitiateRequest();
            createRequest.Attempt3dSecure = true;
            createRequest.AutoCapture = true;
            createRequest.PlanData = planData;
            createRequest.BillingAddress = address;
            createRequest.Shopper = shopper;
            createRequest.RedirectUrls = redirectUrls;

            var response = instance.Post(Guid.NewGuid().ToString(), "", createRequest);
            Assert.NotNull(response);
        }

    }
}
