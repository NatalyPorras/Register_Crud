import React,{Fragment,Suspense} from 'react';
import PropTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'
import { LinearProgress } from '@material-ui/core'
import NavRegister from './components/navListRegister'

const ListLayout = (props) => {
    const {route} = props
    return (
        <Fragment>
            <NavRegister />
            <main>
                        <Suspense fallback={<LinearProgress />}>

                    {renderRoutes(route.routes)}
                            </Suspense>

            </main>
        </Fragment>
    );
};

ListLayout.propTypes = {
  route: PropTypes.object
}

export default ListLayout;