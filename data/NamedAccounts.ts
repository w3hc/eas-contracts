import { DeploymentNetwork } from '../utils/Constants';
import 'dotenv/config';

interface EnvOptions {
  DEPLOYER?: string;
}

const { DEPLOYER: deployer = 'ledger://0x0000000000000000000000000000000000000000' }: EnvOptions =
  process.env as any as EnvOptions;

const mainnet = (address: string) => ({
  [DeploymentNetwork.Mainnet]: address,
  [DeploymentNetwork.Tenderly]: address
});

const arbitrumOne = (address: string) => ({
  [DeploymentNetwork.ArbitrumOne]: address
});

const sepolia = (address: string) => ({
  [DeploymentNetwork.Sepolia]: address
});

const optimismGoerli = (address: string) => ({
  [DeploymentNetwork.OptimismGoerli]: address
});

const TestNamedAccounts = {
  ethWhale: {
    ...mainnet('0x00000000219ab540356cbb839cbe05303d7705fa'),
    ...sepolia('0xb21c33DE1FAb3FA15499c62B59fe0cC3250020d1'),
    ...optimismGoerli('0x4200000000000000000000000000000000000006')
  }
};

export const NamedAccounts = {
  deployer: {
    ...mainnet(deployer),
    ...sepolia(deployer),
    ...arbitrumOne(deployer),
    ...optimismGoerli(deployer)
  },

  ...TestNamedAccounts
};
