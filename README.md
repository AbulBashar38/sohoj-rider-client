This is for user:
{hi, my name is Abul Basar a learner, a junior web developer and a student of Programing Hero. The name of this web site is 'SOHOJ RIDERS' that means an easy transport system. In the home page of the web side you can see some transport ride named BIKE,TRAIN,CAR,BUS. If you click any button of the ride you will see that web side wants to verified you. For that you have to create an account account. if you want to create your account by your google account it is possible in this web site. For that just click the 'login with Google' button. After verified you can choose you destination. Thank you...}   

This is for examiner:
{Assalamualaikum dear examiner. By this web site i try to fulfil all the requirement that was include in assignment(9). In the home page of navigation you will see the login button but after verification you will see the name of yours. In the login page if you have an account but you gives wrong password than you can see a error after that if you give right pass and onBlur it you can't see any error massage. To create "create account" section first time i write 'create new account' into a Link tag and give a path name. For that after clicking 'create new account' it would open a new page in a new route and when i use protected route i saw that the location state is disappeared. and it cant find the '/destination' path. for that user cant go the Destination component directly user come back the home page even he verified by login. After facing this problem i try the previous way that i learn from the Module. when i try to add map in my project i can find very easily and create api key also. but i will face a little error so that i embedded the map url For the convenience of the examiner i give the google map code here:

<Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
export default GoogleApiWrapper({
  apiKey: (YOUR_GOOGLE_API_KEY_GOES_HERE)
})(MapContainer)
 }