const {
  getHttpsAgentOptions,
} = require('./httpsAgentOptions')
const fs = require('fs')

describe('HTTPS agent options (self-signed certificate) tests', () => {
  it('has no custom certificate defined, does not append certificate options', () => {
    const mockConfig = {
      has: jest.fn().mockReturnValue(false),
    }
    const options = getHttpsAgentOptions(mockConfig)
    expect(mockConfig.has).toBeCalledWith('https.concreteCustomCertificate')

    expect(options.ca).toBeFalsy()
  })

  it('has an invalid custom certificate defined, does not append certificate options', () => {
    const mockConfig = {
      has: jest.fn().mockReturnValue(true),
      get: jest.fn().mockReturnValue('./src/test/https/invalidcert.crt'),
    }

    const options = getHttpsAgentOptions(mockConfig)
    expect(mockConfig.has).toBeCalledWith('https.concreteCustomCertificate')
    expect(mockConfig.get).toBeCalledWith('https.concreteCustomCertificate')

    expect(options.ca).toBeFalsy()
  })

  it('has a certificate file that doesn\'t exist, does not append certificate options', () => {
    const mockConfig = {
      has: jest.fn().mockReturnValue(true),
      get: jest.fn().mockReturnValue('./src/test/https/foobar.crt'),
    }

    const options = getHttpsAgentOptions(mockConfig)
    expect(mockConfig.has).toBeCalledWith('https.concreteCustomCertificate')
    expect(mockConfig.get).toBeCalledWith('https.concreteCustomCertificate')

    expect(options.ca).toBeFalsy()
  })

  it('has a valid custom certificate defined, appends certificate options', () => {
    const mockConfig = {
      has: jest.fn().mockReturnValue(true),
      get: jest.fn().mockReturnValue('./src/test/https/validcert.crt'),
    }

    const options = getHttpsAgentOptions(mockConfig)
    expect(mockConfig.has).toBeCalledWith('https.concreteCustomCertificate')
    expect(mockConfig.get).toBeCalledWith('https.concreteCustomCertificate')

    const caFile = fs.readFileSync('./src/test/https/validcert.crt')

    expect(options.ca).toEqual(caFile.toString())
  })
})
