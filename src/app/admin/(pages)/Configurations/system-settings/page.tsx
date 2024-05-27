'use client'
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Tabs as BaseTabs,
  TabsContent as BaseTabsContent,
  TabsList as BaseTabsList,
  TabsTrigger as BaseTabsTrigger,
} from '@/components/ui/tabs';

type Props = {};

type Settings = {
  [key: string]: string;
};

export default function Tabs({}: Props) {
  const [walletSettings, setWalletSettings] = useState({
    driverWalletMinAmount: '',
    userWalletMinAmount: '',
  });

  const [tripSettings, setTripSettings] = useState({
    driverSearchRadius: '',
    userScheduleRideMinutes: '',
    minTimeForScheduledRides: '',
    maxTimeForRegularRides: '',
    driverAcceptRejectDuration: '',
    driverEnableRouteBooking: '',
  });

  const [appSettings, setAppSettings] = useState({
    navbarColor: '',
    sideBarColor: '',
    sideBarTextColor: '',
    appName: '',
    currencyCode: '',
    currencySymbol: '',
    defaultCountryCode: '',
    contactUsMobile: '',
    contactUsLink: '',
    showWalletFeature: '',
  });

  const [referralSettings, setReferralSettings] = useState({
    userReferralCommission: '',
    driverReferralCommission: '',
  });

  const [mapSettings, setMapSettings] = useState({
    googleMapKeyWeb: '',
    googleMapKeyDistance: '',
    googleSheetId: '',
    defaultLatitude: '',
    defaultLongitude: '',
    enableVASEMap: '',
  });

  const prepareSettingsData = (settings: Settings, type: string) => {
    return Object.keys(settings).map(key => ({
      settingName: key,
      settingValue: settings[key],
      settingType: type,
    }));
  };

  const handleSubmit = async (settings: Settings, apiRoute: string, type: string) => {
    const settingsData = prepareSettingsData(settings, type);
    try {
      const response = await fetch(apiRoute, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(settingsData),
      });

      if (!response.ok) {
        throw new Error('Failed to save changes');
      }

      alert('Changes saved successfully');
    } catch (error) {
      console.error('Error saving changes:', error);
      alert('Error saving changes');
    }
  };

  return (
    <BaseTabs defaultValue="WalletSettings" className="w-full h-full">
      <BaseTabsList className="grid grid-cols-5 h-fit max-lg:grid-cols-3 w-full">
        <BaseTabsTrigger value="WalletSettings">Wallet Settings</BaseTabsTrigger>
        <BaseTabsTrigger value="TripSettings">Trip Settings</BaseTabsTrigger>
        <BaseTabsTrigger value="AppSettings">App Settings</BaseTabsTrigger>
        <BaseTabsTrigger value="Referral">Referral</BaseTabsTrigger>
        <BaseTabsTrigger value="MapSettings">Map Settings</BaseTabsTrigger>
      </BaseTabsList>

      {/* Wallet Settings */}
      <BaseTabsContent value="WalletSettings">
        <Card>
          <CardHeader>
            <CardTitle>Wallet Settings</CardTitle>
            <CardDescription>
              Make changes to your wallet here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="driverWalletMinAmount">Driver Wallet Minimum Amount To Get An Order</Label>
              <Input
                id="driverWalletMinAmount"
                placeholder="1"
                value={walletSettings.driverWalletMinAmount}
                onChange={(e) => setWalletSettings({ ...walletSettings, driverWalletMinAmount: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="userWalletMinAmount">User Wallet Minimum Amount To Place An Order</Label>
              <Input
                id="userWalletMinAmount"
                placeholder="1"
                value={walletSettings.userWalletMinAmount}
                onChange={(e) => setWalletSettings({ ...walletSettings, userWalletMinAmount: e.target.value })}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={() => handleSubmit(walletSettings, '/api/walletSettings', 'walletSettings')}>Save changes</Button>
          </CardFooter>
        </Card>
      </BaseTabsContent>

      {/* Trip Settings */}
      <BaseTabsContent value="TripSettings">
        <Card>
          <CardHeader>
            <CardTitle>Trip Settings</CardTitle>
            <CardDescription>
              Make changes to your trip here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="driverSearchRadius">Driver Search radius in Kilometer</Label>
              <Input
                id="driverSearchRadius"
                placeholder="0"
                value={tripSettings.driverSearchRadius}
                onChange={(e) => setTripSettings({ ...tripSettings, driverSearchRadius: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="userScheduleRideMinutes">User Can Schedule A Ride After X minutes</Label>
              <Input
                id="userScheduleRideMinutes"
                placeholder="1"
                value={tripSettings.userScheduleRideMinutes}
                onChange={(e) => setTripSettings({ ...tripSettings, userScheduleRideMinutes: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="minTimeForScheduledRides">Minimum time for find drivers for schedule rides in minutes</Label>
              <Input
                id="minTimeForScheduledRides"
                placeholder="1"
                value={tripSettings.minTimeForScheduledRides}
                onChange={(e) => setTripSettings({ ...tripSettings, minTimeForScheduledRides: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="maxTimeForRegularRides">Maximum Time For Find Drivers For Regular Ride</Label>
              <Input
                id="maxTimeForRegularRides"
                placeholder="1"
                value={tripSettings.maxTimeForRegularRides}
                onChange={(e) => setTripSettings({ ...tripSettings, maxTimeForRegularRides: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="driverAcceptRejectDuration">Trip Accept/Reject Duration For Driver in Seconds</Label>
              <Input
                id="driverAcceptRejectDuration"
                placeholder="1"
                value={tripSettings.driverAcceptRejectDuration}
                onChange={(e) => setTripSettings({ ...tripSettings, driverAcceptRejectDuration: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="driverEnableRouteBooking">How Many Times A Driver Can Enable My Route Booking Per Day</Label>
              <Input
                id="driverEnableRouteBooking"
                placeholder="1"
                value={tripSettings.driverEnableRouteBooking}
                onChange={(e) => setTripSettings({ ...tripSettings, driverEnableRouteBooking: e.target.value })}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={() => handleSubmit(tripSettings, '/api/tripSettings', 'tripSettings')}>Save changes</Button>
          </CardFooter>
        </Card>
      </BaseTabsContent>

      {/* App Settings */}
      <BaseTabsContent value="AppSettings">
        <Card>
          <CardHeader>
            <CardTitle>App Settings</CardTitle>
            <CardDescription>
              Make changes to your app here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="navbarColor">Navbar Color</Label>
              <Input
                id="navbarColor"
                placeholder="0"
                value={appSettings.navbarColor}
                onChange={(e) => setAppSettings({ ...appSettings, navbarColor: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="sideBarColor">Side Bar Color</Label>
              <Input
                id="sideBarColor"
                placeholder="1"
                value={appSettings.sideBarColor}
                onChange={(e) => setAppSettings({ ...appSettings, sideBarColor: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="sideBarTextColor">Side Bar Text Color</Label>
              <Input
                id="sideBarTextColor"
                placeholder="1"
                value={appSettings.sideBarTextColor}
                onChange={(e) => setAppSettings({ ...appSettings, sideBarTextColor: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="appName">App Name</Label>
              <Input
                id="appName"
                placeholder="1"
                value={appSettings.appName}
                onChange={(e) => setAppSettings({ ...appSettings, appName: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="currencyCode">Currency Code</Label>
              <Input
                id="currencyCode"
                placeholder="1"
                value={appSettings.currencyCode}
                onChange={(e) => setAppSettings({ ...appSettings, currencyCode: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="currencySymbol">Currency Symbol</Label>
              <Input
                id="currencySymbol"
                placeholder="1"
                value={appSettings.currencySymbol}
                onChange={(e) => setAppSettings({ ...appSettings, currencySymbol: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="defaultCountryCode">Default Country Code</Label>
              <Input
                id="defaultCountryCode"
                placeholder="1"
                value={appSettings.defaultCountryCode}
                onChange={(e) => setAppSettings({ ...appSettings, defaultCountryCode: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="contactUsMobile">Contact Us Mobile</Label>
              <Input
                id="contactUsMobile"
                placeholder="1"
                value={appSettings.contactUsMobile}
                onChange={(e) => setAppSettings({ ...appSettings, contactUsMobile: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="contactUsLink">Contact Us Link</Label>
              <Input
                id="contactUsLink"
                placeholder="1"
                value={appSettings.contactUsLink}
                onChange={(e) => setAppSettings({ ...appSettings, contactUsLink: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="showWalletFeature">Show Wallet Feature</Label>
              <Input
                id="showWalletFeature"
                placeholder="1"
                value={appSettings.showWalletFeature}
                onChange={(e) => setAppSettings({ ...appSettings, showWalletFeature: e.target.value })}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={() => handleSubmit(appSettings, '/api/appSettings', 'appSettings')}>Save changes</Button>
          </CardFooter>
        </Card>
      </BaseTabsContent>

      {/* Referral Settings */}
      <BaseTabsContent value="Referral">
        <Card>
          <CardHeader>
            <CardTitle>Referral Settings</CardTitle>
            <CardDescription>
              Make changes to your Referral here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="userReferralCommission">User Referral Commission</Label>
              <Input
                id="userReferralCommission"
                placeholder="0"
                value={referralSettings.userReferralCommission}
                onChange={(e) => setReferralSettings({ ...referralSettings, userReferralCommission: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="driverReferralCommission">Driver Referral Commission</Label>
              <Input
                id="driverReferralCommission"
                placeholder="1"
                value={referralSettings.driverReferralCommission}
                onChange={(e) => setReferralSettings({ ...referralSettings, driverReferralCommission: e.target.value })}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={() => handleSubmit(referralSettings, '/api/referralSettings', 'referralSettings')}>Save changes</Button>
          </CardFooter>
        </Card>
      </BaseTabsContent>

      {/* Map Settings */}
      <BaseTabsContent value="MapSettings">
        <Card>
          <CardHeader>
            <CardTitle>Map Settings</CardTitle>
            <CardDescription>
              Make changes to your Map here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="googleMapKeyWeb">Google Map Key For Web</Label>
              <Input
                id="googleMapKeyWeb"
                placeholder="0"
                value={mapSettings.googleMapKeyWeb}
                onChange={(e) => setMapSettings({ ...mapSettings, googleMapKeyWeb: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="googleMapKeyDistance">Google Map Key For Distance Matrix API</Label>
              <Input
                id="googleMapKeyDistance"
                placeholder="1"
                value={mapSettings.googleMapKeyDistance}
                onChange={(e) => setMapSettings({ ...mapSettings, googleMapKeyDistance: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="googleSheetId">Google Sheet ID</Label>
              <Input
                id="googleSheetId"
                placeholder="1"
                value={mapSettings.googleSheetId}
                onChange={(e) => setMapSettings({ ...mapSettings, googleSheetId: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="defaultLatitude">Default Latitude</Label>
              <Input
                id="defaultLatitude"
                placeholder="1"
                value={mapSettings.defaultLatitude}
                onChange={(e) => setMapSettings({ ...mapSettings, defaultLatitude: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="defaultLongitude">Default Longitude</Label>
              <Input
                id="defaultLongitude"
                placeholder="1"
                value={mapSettings.defaultLongitude}
                onChange={(e) => setMapSettings({ ...mapSettings, defaultLongitude: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="enableVASEMap">Enable VASE Map</Label>
              <Input
                id="enableVASEMap"
                placeholder="1"
                value={mapSettings.enableVASEMap}
                onChange={(e) => setMapSettings({ ...mapSettings, enableVASEMap: e.target.value })}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={() => handleSubmit(mapSettings, '/api/mapSettings', 'mapSettings')}>Save changes</Button>
          </CardFooter>
        </Card>
      </BaseTabsContent>
    </BaseTabs>
  );
}
