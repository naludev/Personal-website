import { Layout } from 'common/layouts'
import PropTypes from 'prop-types'

const Component = ({ component: Components }) => (
  <Layout><Components /></Layout>
)

Component.propTypes = {
  component: PropTypes.elementType
}

export default Component
