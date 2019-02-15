import * as RX from 'reactxp'

import { HomeScreen } from './HomeScreen';
import { PlaybackScreen } from './PlaybackScreen';

interface Video {
  id: number,
  name: string,
  previewImage: string,
  videoUrl: string,
}

enum NavigationRouteId {
    HomeScreen,
    PlaybackScreen,
}

const styles = {
    navCardStyle: RX.Styles.createViewStyle({
        backgroundColor: '#f5fcff'
    })
};

interface AppState {
  video: Video,
}

class App extends RX.Component<{}, AppState> {
    private _navigator: RX.Navigator;

    constructor(props) {
      super(props)

      this.state = {
        video: undefined,
      }
    }

    componentDidMount() {
        this._navigator.immediatelyResetRouteStack([{
            routeId: NavigationRouteId.HomeScreen,
            sceneConfigType: RX.Types.NavigatorSceneConfigType.Fade
        }]);
    }

    render() {
        return (
            <RX.Navigator
                ref={ this._onNavigatorRef }
                renderScene={ this._renderScene }
                cardStyle={ styles.navCardStyle }
            />
        );
    }

    private _onNavigatorRef = (navigator: RX.Navigator) => {
        this._navigator = navigator;
    }

    private _renderScene = (navigatorRoute: RX.Types.NavigatorRoute) => {
        switch (navigatorRoute.routeId) {
            case NavigationRouteId.HomeScreen:
                return <HomeScreen onPressVideo={ this._onPressVideo } />

            case NavigationRouteId.PlaybackScreen:
                return <PlaybackScreen onPressBack={ this._onPressBack } video={this.state.video} />
        }

        return null;
    }

    private _onPressVideo = (video: Video) => {
        this.setState({ video })
        this._navigator.push({
            routeId: NavigationRouteId.PlaybackScreen,
            sceneConfigType: RX.Types.NavigatorSceneConfigType.FloatFromRight,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

    private _onPressBack = () => {
        this._navigator.pop();
    }
}

export = App;
